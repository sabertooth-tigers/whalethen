export default (state = {}, action) => {
  switch (action.type) {
    case 'INCREMENT_VOTE':
      return {
        ...state,
        vote: state.vote + 1,
      };
    case 'DECREMENT_VOTE':
      return {
        ...state,
        vote: state.vote - 1,
      };
    case 'SET_VOTE':
      return {
        ...state,
        vote: action.vote,
      };
    default:
      return state;
  }
};
