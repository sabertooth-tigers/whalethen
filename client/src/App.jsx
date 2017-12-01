import React from 'react';
import shortid from 'shortid';
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

  render() {
    const {
      timelineName,
      timelineId,
    } = this.props;

    return (
      <div className="App">
        <div className="title">Well Hollo</div>
        <div className="container timelineParams">
          <div className="label">{timelineName}</div>
          <div className="label">{timelineId}</div>
          <TimelineInputBox {...this.props} />
          <StartDateBox {...this.props} />
          <EndDateBox {...this.props} />
        </div>
        <CreateEventBox {...this.props} />
        <TimelineLookUp {...this.props} />
        <Timeline {...this.props} />
        <Search {...this.props} />
      </div>
    );
  }
}


const mapStateToProps = ({ appState }) => ({ ...appState });

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
