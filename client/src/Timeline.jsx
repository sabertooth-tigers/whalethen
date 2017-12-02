import React from 'react';
import _ from 'lodash';
import propTypes from 'prop-types';
import Pagination from 'react-js-pagination';
import DayView from './Day';

const Timeline = ({ timelineData, timelineId, activePage }) => (
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
    <div>
      <Pagination

        itemsCountPerPage={5}
        totalItemsCount={40}
        pageRangeDisplayed={5}

      />
    </div>
  </div>
);

Timeline.propTypes = {
  timelineData: propTypes.instanceOf(Array).isRequired,
  timelineId: propTypes.string.isRequired,
};

export default Timeline;
