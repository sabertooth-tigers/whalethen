import React from 'react';
import _ from 'lodash';
import propTypes from 'prop-types';
import Event from './Events';

const Day = ({ day, timelineId }) => (
  <div className="dayView">
    <div className="dayWrap">
      <div className="dayLabel">Day</div><div className="dayTitle">{day.day}</div>
    </div>
    <div className="events">
      {_.map(day.events, (event, index) => <Event day={day} timelineId={timelineId} event={event} key={index} />)}
    </div>
  </div>
);


Day.propTypes = {
  day: propTypes.instanceOf(Object).isRequired,
};

export default Day;
