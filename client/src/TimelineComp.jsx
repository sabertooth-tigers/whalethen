import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Search from './Search';
import Timeline from './Timeline';
import * as actionCreators from './actions/actionCreator';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';

class TimelineComp extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.match.params.id);
    const {
      getTrip,
      timelineId,

    } = this.props;
    // this.props.router.push(this.props.match.params.id)
    getTrip(this.props.match.params.id);
  }

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
