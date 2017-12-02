import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Search from './Search';
import Timeline from './Timeline';
import * as actionCreators from './actions/actionCreator';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import TimelineComp from './TimelineComp';

class App extends React.Component {

  render() {
    const {
      timelineName,
      timelineId,
    } = this.props;

    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={TimelineComp} />
          <Route path="/timeline/" component={TimelineComp} />
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = ({ appState }) => ({ ...appState });

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
