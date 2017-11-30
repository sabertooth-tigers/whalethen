import React from 'react';
import axios from 'axios';
import moment from 'moment';
import shortid from 'shortid';
import Search from './Search';
import Timeline from './Timeline';
import TimelineInputBox from './TimelineInputBox';
import TimelineLookUp from './TimelineLookUp';
import StartDateBox from './StartDateBox';
import EndDateBox from './EndDateBox';
import CreateEventBox from './CreateEventBox';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './actions/actionCreator';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      timelineData: [],
      createEventDay: '',
      newEvent: '',
      newEventAddress: '',
    };

    console.log(actionCreators);

    this.onSubmit = this.onSubmit.bind(this);
    this.addNewEvent = this.addNewEvent.bind(this);
    this.getTrip = this.getTrip.bind(this);
    this.handleID = this.handleID.bind(this);
    this.handleName = this.handleName.bind(this);
    this.onLookupEnter = this.onLookupEnter.bind(this);
    this.onCreateDaySelect = this.onCreateDaySelect.bind(this);
    this.onCreateEnter = this.onCreateEnter.bind(this);
    this.handleNewEvent = this.handleNewEvent.bind(this);
    this.handleNewAddress = this.handleNewAddress.bind(this);
    this.createEvent = this.createEvent.bind(this);
  }
  componentDidMount() {
    // on init function to make get request to server
    // temp using 1234 as the timelineId and test as timelineName
    // this.getTrip();
  }

  onSubmit(event) {
    if (event && event.key !== 'Enter') { return; }
    const {
      startDate,
      endDate,
      timelineName,
      setId,
      setDays,
    } = this.props;
    const start = moment(startDate);
    const end = moment(endDate);
    const timelineId = shortid.generate();
    const numberOfDays = end.diff(start, 'days');
    setId(timelineId);
    setDays(numberOfDays);

    axios.post('/timeline', {
      timelineId,
      timelineName,
      numberOfDays,
    })
      .then(() => this.getTrip())
      .catch(err => console.error('error in submit ', err));
  }


  onCreateEnter(event) {
    if (event.key === 'Enter') {
      this.createEvent();
    }
  }

  onCreateDaySelect(e) {
    // this.props.createEventDay(e.target.value)
    // ACTION: 'CREATE_EVENT_DAY'
    this.setState({
      createEventDay: e.target.value,
    });
  }

  onLookupEnter(event) {
    if (event.key === 'Enter') {
      this.getTrip();
    }
  }

  getTrip() {
    const { timelineId, setId, setDays, onInputChange } = this.props;

    axios.get(`/timeline/${timelineId}`)
      .then(({ data }) => {
        console.log(data);
        onInputChange('timelineName', data[0].timelineName);
        setId(data[0].timelineId);
        setDays(data.length);
        this.setState({
          timelineData: data,
        });
      })
      .catch(err => console.error(err));
  }

  handleID(e) {
    const { setId } = this.props;
    setId(e.target.value);
  }

  handleName(e) {
    this.props.onInputChange('timelineName', e.target.value);
  }

  handleNewEvent(e) {
    this.setState({
      newEvent: e.target.value,
    });
  }

  handleNewAddress(e) {
    this.setState({
      newEventAddress: e.target.value,
    });
  }

  addNewEvent(event, selectedDay) {
    const { timelineId, timelineName } = this.props;
    const day = Number(selectedDay.slice(4));
    axios.post('/entry', {
      event,
      timelineId,
      day,
      timelineName,
    })
      .then(() => this.getTrip())
      .catch(err => console.error('add event error: ', err));
  }

  createEvent() {
    const eventObj = {
      name: this.state.newEvent,
      address: this.state.newEventAddress,
      votes: 0,
    };
    this.addNewEvent(eventObj, this.state.createEventDay);
  }

  render() {
    const { timelineName, timelineId, numberOfDays } = this.props;

    return (
      <div className="App">
        <div className="title">Well Hollo</div>
        <div className="container timelineParams">
          <div className="label">{timelineName}</div>
          <div className="label">{timelineId}</div>

          <TimelineInputBox
            {...this.props}
            onSubmit={this.onSubmit}
          />
          <StartDateBox
            {...this.props}
          />
          <EndDateBox
            {...this.props}
          />
          <button
            className="scheduleSubmit"
            onClick={() => this.onSubmit()}
          >
            New Schedule
          </button>
        </div>
        <CreateEventBox
          timelineId={timelineId}
          numberOfDays={numberOfDays}
          onCreateDaySelect={this.onCreateDaySelect}
          onCreateEnter={this.onCreateEnter}
          createEventDay={this.state.createEventDay}
          handleNewEvent={this.handleNewEvent}
          handleNewAddress={this.handleNewAddress}
          createEvent={this.createEvent}
        />
        <TimelineLookUp
          getTrip={this.getTrip}
          handleID={this.handleID}
          handleName={this.handleName}
          onLookupEnter={this.onLookupEnter}
        />
        <Timeline timelineData={this.state.timelineData} timelineId={timelineId} />
        <Search
          numberOfDays={numberOfDays}
          addNewEvent={this.addNewEvent}
        />
      </div>
    );
  }
}


const mapStateToProps = ({ appState }) => ({ ...appState });

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
