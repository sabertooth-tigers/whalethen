import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Search from './Search';
import Timeline from './Timeline';
import TimelineInputBox from './TimelineInputBox';
import TimelineLookUp from './TimelineLookUp';
import StartDateBox from './StartDateBox';
import EndDateBox from './EndDateBox';
import CreateEventBox from './CreateEventBox';
import * as actionCreators from './actions/actionCreator';

class App extends React.Component {

  getTrip(event) {
    if (event && event.key !== 'Enter') { return; }
    this.props.getTrip(this.props.timelineId);
  }

  render() {
    const {
      timelineName,
      timelineId,
      saveTimeline,
      getTrip,
    } = this.props;

    this.getTrip = this.getTrip.bind(this);

    return (
      <div className="App">
        <div className="title">Well Hollo</div>
        <div className="container timelineParams">
          <div className="label">{timelineName}</div>
          <div className="label">{timelineId}</div>
          <TimelineInputBox {...this.props} />
          <StartDateBox {...this.props} />
          <EndDateBox {...this.props} />
          <button className="scheduleSubmit" onClick={() => saveTimeline(null, getTrip)}>
            New Schedule
          </button>
        </div>
        <CreateEventBox {...this.props} />
        <TimelineLookUp {...this.props} />
        <Timeline {...this.props} />
        <Search {...this.props}  />
      </div>
    );
  }
}


const mapStateToProps = ({ appState }) => ({ ...appState });

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
