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
    setVote(event.votes || 0, event._id);
    this.votes = this.props.vote;
    console.log(this.props.vote);
  }
  render() {
    const { upvote, downvote, event } = this.props;
    

    return (
      <div className="event">
        <div className="eventName">{this.props.event.name}</div>
        <div className="description">{this.props.event.address}</div>
        <span className="vote">{` Votes: ${this.props.vote ? this.props.vote[event._id] : 1}`}
          <button className="votes" onClick={() => downvote(event._id)}>-</button>
          <button className="votes" onClick={() => upvote(event._id)}>+</button>
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
