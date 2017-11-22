import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import moment from 'moment';
import Search from './Search';
import Timeline from './Timeline';
import TimelineInputBox from './TimelineInputBox';
import StartDateBox from './StartDateBox';
import EndDateBox from './EndDateBox';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      timelineData: [],
      timelineName: 'test', // temp until we get some more data built up
      startDate: '',
      endDate: '',
      numberOfDays: 4,
      timelineId: 1234, // temp until we get a way to produce these
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.addNewEvent = this.addNewEvent.bind(this);
  }
  componentDidMount() {
    // on init function to make get request to server
    // temp using 1234 as the timelineId and test as timelineName
    axios.get(`timeline/${this.state.timelineName}/${this.state.timelineId}`)
      .then(({ data }) => this.setState({ timelineData: data }))
      .catch(err => console.error(err));
  }

  onInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onSubmit() {
    this.countDays();
  }

  onEnter(event) {
    if (event.key === 'Enter') {
      this.onSubmit();
    }
  }

  addNewEvent(event, day) {
    // input: event => {name, type}
    axios.post('/entry', event)
      .then(() => axios.get(`/timeline/${this.state.timelineId}`))
      .then(response => this.setState({ timelineData: response }))
      .catch(err => console.error(err));
  }

  countDays() {
    const start = moment(this.state.startDate);
    const end = moment(this.state.endDate);
    this.setState({ numberOfDays: end.diff(start, 'days') });
  }

  render() {
    return (
      <div className="App">
        <div className="container timelineParams">
          <div className="title">WhaleThen</div>
          <TimelineInputBox
            onInput={this.onInputChange}
            onEnter={this.onEnter}
          />
          <StartDateBox
            onInput={this.onInputChange}
            onEnter={this.onEnter}
          />
          <EndDateBox
            onInput={this.onInputChange}
            onEnter={this.onEnter}
          />
          <button
            className="scheduleSubmit"
            onSubmit={event => this.onSubmit(event)}
          >
            Make New Schedule
          </button>
        </div>
        <Timeline timelineData={this.state.timelineData} />
        <Search
          numberOfDays={this.state.numberOfDays}
          addNewEvent={this.addNewEvent}
        />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
