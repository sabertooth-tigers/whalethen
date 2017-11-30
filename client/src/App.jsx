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
  constructor() {
    super();

    this.onSubmit = this.onSubmit.bind(this);
    this.addNewEvent = this.addNewEvent.bind(this);
    this.getTrip = this.getTrip.bind(this);
    this.onLookupEnter = this.onLookupEnter.bind(this);
    this.onCreateEnter = this.onCreateEnter.bind(this);
    this.createEvent = this.createEvent.bind(this);
  }

  onSubmit(event) {
    if (event && event.key !== 'Enter') { return; }
    const {
      startDate,
      endDate,
      timelineName,
      setId,
      setDays,
    } = this.props;
    
    const start = moment(startDate);
    const end = moment(endDate);
    const timelineId = shortid.generate();
    const numberOfDays = end.diff(start, 'days');
    setId(timelineId);
    setDays(numberOfDays);

    axios.post('/timeline', {
      timelineId,
      timelineName,
      numberOfDays,
    })
      .then(() => this.getTrip())
      .catch(err => console.error('error in submit ', err));
  }


  onCreateEnter(event) {
    if (event.key === 'Enter') {
      this.createEvent();
    }
  }

  onLookupEnter(event) {
    if (event.key === 'Enter') {
      this.getTrip();
    }
  }

  getTrip(event) {
    if (event && event.key === 'Enter') { return; }

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

  addNewEvent(event, selectedDay) {
    const { timelineId, timelineName } = this.props;
    const day = Number(selectedDay.slice(4));

    axios.post('/entry', {
      event,
      timelineId,
      day,
      timelineName,
    })
      .then(() => this.getTrip())
      .catch(err => console.error('add event error: ', err));
  }

  createEvent(event) {
    if (event && event.key === 'Enter') { return; }

    const { newEvent, newEventAddress } = this.props;
    const eventObj = {
      name: newEvent,
      address: newEventAddress,
      votes: 0,
    };
    this.addNewEvent(eventObj, this.props.createEventDay);
  }

  render() {
    const { timelineName, timelineId, numberOfDays } = this.props;

    return (
      <div className="App">
        <div className="title">Well Hollo</div>
        <div className="container timelineParams">
          <div className="label">{timelineName}</div>
          <div className="label">{timelineId}</div>

          <TimelineInputBox
            {...this.props}
            onSubmit={this.onSubmit}
          />
          <StartDateBox {...this.props} />
          <EndDateBox {...this.props} />
          <button className="scheduleSubmit" onClick={() => this.onSubmit()}>
            New Schedule
          </button>
        </div>
        <CreateEventBox
          {...this.props}
          onCreateEnter={this.onCreateEnter}
          createEventDay={this.props.createEventDay}
          createEvent={this.createEvent}
        />
        <TimelineLookUp
          {...this.props}
          getTrip={this.getTrip}
          onLookupEnter={this.onLookupEnter}
        />
        <Timeline {...this.props} />
        <Search
          {...this.props}
          addNewEvent={this.addNewEvent}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ appState }) => ({ ...appState });
const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
