import React from 'react';
import axios from 'axios';
import moment from 'moment';
import shortid from 'shortid';
import Search from './Search';
import Timeline from './Timeline';
import TimelineInputBox from './TimelineInputBox';
import TimelineLookUp from './TimelineLookUp';
import StartDateBox from './StartDateBox';
import EndDateBox from './EndDateBox';
import CreateEventBox from './CreateEventBox';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './actions/actionCreator';

class App extends React.Component {

  getTrip(event) {
    if (event && event.key !== 'Enter') { return; }

    const { timelineId, setId, setDays, onInputChange, setTimelineData } = this.props;

    axios.get(`/timeline/${timelineId}`)
      .then(({ data }) => {
        onInputChange('timelineName', data[0].timelineName);
        setId(data[0].timelineId);
        setDays(data.length);
        setTimelineData(data);
      })
      .catch(err => console.error(err));
  }

  createEvent(event) {
    if (event && event.key !== 'Enter') { return; }

    const { newEvent, newEventAddress, addNewEvent } = this.props;
    const eventObj = {
      name: newEvent,
      address: newEventAddress,
      votes: 0,
    };

    addNewEvent(eventObj, this.getTrip, this.props.createEventDay);
  }

  render() {
    const { timelineName, timelineId, numberOfDays, saveTimeline, saveTimelineToDatabase } = this.props;
    this.getTrip = this.getTrip.bind(this);
    this.createEvent = this.createEvent.bind(this);

    return (
      <div className="App">
        <div className="title">Well Hollo</div>
        <div className="container timelineParams">
          <div className="label">{timelineName}</div>
          <div className="label">{timelineId}</div>
          <TimelineInputBox {...this.props} onSubmit={saveTimeline} getTrip={this.getTrip} />
          <StartDateBox {...this.props} />
          <EndDateBox {...this.props} />
          <button className="scheduleSubmit" onClick={() => saveTimeline(null, this.getTrip)}>
            New Schedule
          </button>
        </div>
        <CreateEventBox {...this.props} createEvent={this.createEvent} />
        <TimelineLookUp {...this.props} getTrip={this.getTrip} />
        <Timeline {...this.props} />
        <Search {...this.props} getTrip={this.getTrip} />
      </div>
    );
  }
}

const mapStateToProps = ({ appState }) => ({ ...appState });
const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
