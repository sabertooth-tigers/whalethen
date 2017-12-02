import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import propTypes from 'prop-types';
import SearchBar from './SearchBar';
import SearchList from './SearchList';
import * as actionCreators from './actions/actionCreator';

class Search extends React.Component {
  render() {
    return (
      <div className="container search">
        <SearchBar {...this.props} />
        <div className="scrollbox">
          <SearchList {...this.props} />
        </div>
      </div>
    );
  }
}


const mapStateToProps = ({ searchState }) => ({ ...searchState });

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
