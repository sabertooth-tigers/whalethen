import annyang from 'annyang';
import React from 'react';
import propTypes from 'prop-types';
import InfiniteCalendar, { Calendar, withRange } from 'react-infinite-calendar';
import moment from 'moment';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import NotificationEventNote from 'material-ui/svg-icons/notification/event-note';

class StartDateBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCalendar: false,
      totalDays: '',
      showDuration: false,
    };

    this.onSelectChange = this.onSelectChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentDidMount() {
    if (annyang) {
      const commands = {
        andrew: () => this.setState({ displayCalendar: !this.state.displayCalendar }),
      };
      annyang.addCommands(commands);
      annyang.start();
    }
  }

  onSelectChange(date) {
    if (date.eventType === 3) {
      const rawDayCount = moment(date.end).diff(moment(date.start), 'days');
      this.props.setDateRange(rawDayCount);
      this.setState({
        displayCalendar: !this.state.displayCalendar,
        totalDays: rawDayCount,
        showDuration: true,
      });
    }
  }

  handleButtonClick() {
    this.setState({ displayCalendar: !this.state.displayCalendar });
  }

  render() {
    const today = new Date();
    const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    const CalendarWithRange = withRange(Calendar);
    const showDuration = (
      <div className="showDuration">
        Itinerary is {this.state.totalDays} days long
      </div>
    );
    const cal = (
      <label className="startDate" htmlFor="startDate">
        Start Date:
          <InfiniteCalendar
            width={1000}
            height={420}
            Component={CalendarWithRange}
            selected={null}
            onSelect={date => this.onSelectChange(date)}
            locale={{ headerFormat: 'MMM Do' }}
          />
      </label>
    );

    const reply = () => {
      const ziriOpenCal = new SpeechSynthesisUtterance('Whale then! Please select the start and end dates for your timeline.');
      window.speechSynthesis.speak(ziriOpenCal);
    };
    return (
      <div>
        <MuiThemeProvider>
          <RaisedButton
            label="Select or say pick-a-date"
            labelColor="#009688"
            icon={<NotificationEventNote />}
            onClick={this.handleButtonClick}
          />
        </MuiThemeProvider>
        {this.state.displayCalendar && cal}
        {this.state.displayCalendar && reply()}
        {this.state.showDuration && showDuration}
      </div>
    );
  }
}

StartDateBox.propTypes = {
  setDateRange: propTypes.func.isRequired,
};


export default StartDateBox;
