import React from 'react';
import propTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './actions/actionCreator';

// TODO: FIX SYNCHRONIZED VOTING AFTER REDUXIFYNG IT\
class Events extends React.Component {
  constructor(props) {
    super(props);

    this.patchVotesInDB = this.patchVotesInDB.bind(this);
  }

  patchVotesInDB() {
    axios.put('/entry', {
      timelineId: this.props.timelineId,
      day: this.props.day.day,
      eventId: this.props.event._id,
      votes: this.props.votes,
    });
  }
  componentDidMount() {
    const { event, setVote } = this.props;
    setVote(event.votes);
  }
  render() {
    const { upvote, downvote } = this.props;
    

    return (
      <div className="event">
        <div className="eventName">{this.props.event.name}</div>
        <div className="description">{this.props.event.address}</div>
        <span className="vote">{` Votes: ${this.props.vote}   `}
          <button className="votes" onClick={downvote}>-</button>
          <button className="votes" onClick={upvote}>+</button>
        </span>
      </div>
    );
  }
}

Events.propTypes = {
  event: propTypes.instanceOf(Object).isRequired,
  day: propTypes.instanceOf(Object).isRequired,
  timelineId: propTypes.string.isRequired,
};

const mapStateToProps = ({ eventState }) => ({ ...eventState });

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Events);
