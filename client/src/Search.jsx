import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import propTypes from 'prop-types';
import SearchBar from './SearchBar';
import SearchList from './SearchList';
import Data from '../../sampleData';
import * as actionCreators from './actions/actionCreator';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchList: Data.sampleData,
      selectedDay: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleCat = this.handleCat.bind(this);
    this.handleLoc = this.handleLoc.bind(this);
    this.onEnter = this.onEnter.bind(this);
  }
  onSubmit() {
    axios.get('/search', { params: { category: this.props.termBar, location: this.props.locationSearch } })
      .then(({ data }) => {
        console.log(data);

        this.setState({
          searchList: data,
        });
      })
      .catch(err => console.error(err));
  }
  onEnter(event) {
    if (event.key === 'Enter') {
      this.onSubmit();
    }
  }
  render() {
    return (
      <div className="container search">
        <SearchBar
          {...this.props}
          onSubmit={this.onSubmit}
          onEnter={this.onEnter}
        />
        <div className="scrollbox">
          <SearchList
            {...this.props}
            searchList={this.state.searchList}
            numberOfDays={this.props.numberOfDays}
            addNewEvent={this.props.addNewEvent}
            selectedDay={this.state.selectedDay}
          />
        </div>
      </div>
    );
  }
}


Search.propTypes = {
  numberOfDays: propTypes.number.isRequired,
  addNewEvent: propTypes.func.isRequired,
};


const mapStateToProps = ({ searchState }) => ({ ...searchState });

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
