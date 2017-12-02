import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Search from './Search';
import Timeline from './Timeline';
import * as actionCreators from './actions/actionCreator';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    const {
      timelineName,
      timelineId,
    } = this.props;

    return (
      <div className="App">
        <Search {...this.props} />
        <Timeline {...this.props} />
      </div>
    );
  }
}


const mapStateToProps = ({ appState }) => ({ ...appState });

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
