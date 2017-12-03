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
    const { upvote, downvote, saveVote, event } = this.props;
    

    return (
      <div className="event">
        <div className="eventName">{this.props.event.name}</div>
        <div className="description">{this.props.event.address}</div>
        <div className="voteWrap">
          <span className="vote">{` Votes: ${this.props.vote ? this.props.vote[event._id] : 0}`}
            <button className="votes" onClick={() => saveVote(this.props, -1)}>-</button>
            <span className="vote">{` ${this.state.votes} Votes   `}</span>
            <button className="votes" onClick={() => saveVote(this.props, 1)}>+</button>
          </span>
        </div>
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
