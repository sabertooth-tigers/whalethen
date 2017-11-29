import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">WhaleThen</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  },
});

export default Main;

// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import * as actionCreators from './actions/actionCreator';
// // import Main from './Main';

// mapStateToProps = (state) => {
//   vote: state.vote,
//   events: state.events,
// }

// mapDispatchToProps = (dispatch) => {
//   bindActionCreators(actionCreators, dispatch);
// }

// const App = connect(mapStateToProps, mapDispatchToProps)(Main);

// export default App;
