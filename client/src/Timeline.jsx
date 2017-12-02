import React from 'react';
import _ from 'lodash';
import propTypes from 'prop-types';
import DayView from './Day';

const Timeline = ({ timelineData, timelineId }) => {
  console.log(timelineId);
  return (
    <div className="container timeline">
      <div className="container day">
        {_.map(timelineData, (day, index) => (
          <DayView
            timelineId={timelineId}
            day={day}
            key={index}
          />
      ))}
      </div>
    </div>
  );
};

Timeline.propTypes = {
  timelineData: propTypes.instanceOf(Array).isRequired,
  timelineId: propTypes.string.isRequired,
};

export default Timeline;
