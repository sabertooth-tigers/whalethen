import React from 'react';
import Pagination from 'react-js-pagination';

const Footer = props => (
  <div>
    <Pagination
      itemsCountPerPage={5}
      totalItemsCount={40}
      pageRangeDisplayed={5}
    />
  </div>
);

export default Footer;
