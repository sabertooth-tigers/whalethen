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
import { Switch, Route } from 'react-router-dom';

class Header extends React.Component {
  render() {
    const {
      timelineName,
      timelineId,
      saveTimeline,
      getTrip,
    } = this.props;
    return (
      <div>
        <div className="title">WhaleThen</div>
        <div className="container timelineParams">
          <div className="label">{timelineName}</div>
          <div className="label">{timelineId}</div>
          <TimelineInputBox {...this.props} />
          <StartDateBox {...this.props} />
          <EndDateBox {...this.props} />
        </div>
        <CreateEventBox {...this.props} />
        <TimelineLookUp {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = ({ appState }) => ({ ...appState });

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
