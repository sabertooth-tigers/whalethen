import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Search from './Search';
import Timeline from './Timeline';
import * as actionCreators from './actions/actionCreator';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';

// const TimelineComp = () => (
//   <div>
//     <Timeline {...this.props} />
//     <Search {...this.props} />
//   </div>
// );

class TimelineComp extends React.Component {
  render() {
    return (
      <div className="App">
        <Timeline {...this.props} />
        <Search {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = ({ appState }) => ({ ...appState });

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TimelineComp);
