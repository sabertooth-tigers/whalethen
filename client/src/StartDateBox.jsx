import annyang from 'annyang';
import React from 'react';
import propTypes from 'prop-types';
import InfiniteCalendar, { Calendar, withRange } from 'react-infinite-calendar';
import moment from 'moment';

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
        'pick a date': () => this.setState({ displayCalendar: !this.state.displayCalendar }),
      };
      annyang.addCommands(commands);
      annyang.start();
    }
  }

  onSelectChange(date) {
    console.log(date);
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
      const ziriOpenCal = new SpeechSynthesisUtterance(`Whale then! Please select the start and end dates for your timeline.`);
      window.speechSynthesis.speak(ziriOpenCal);
    }
    return (
      <div>
        <button onClick={this.handleButtonClick}>Or say "Pick a Date"</button>
        {this.state.displayCalendar && cal}
        {this.state.displayCalendar && reply()}
        {this.state.showDuration && showDuration}
      </div>
    );
  }
}


// const StartDateBox = ({ onInputChange, onEnter }) => {
//   const today = new Date();
//   const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
//   const CalendarWithRange = withRange(Calendar);
//   return (
//     <div className="inputBox label">
//       <label className="startDate" htmlFor="startDate">
//       Start Date:
//        <InfiniteCalendar
//           width={1000}
//           height={420}
//           Component={CalendarWithRange}
//           selected={null}
//           onSelect={date => console.log(date)}
//           locale={{
//             headerFormat: 'MMM Do',
//           }}
//         />,
//       {/* <input
//         id="startDate"
//         type="date"
//         name="startDate"
//         onChange={({ target }) => onInputChange(target.name, target.value)}
//         placeholder="enter a start date"
//       /> */}
//       </label>
//     </div>
//   );
// };

StartDateBox.propTypes = {
  setDateRange: propTypes.func.isRequired,
};


export default StartDateBox;
