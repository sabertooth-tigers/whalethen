export default (state = {}, action) => {
  switch (action.type) {
    case 'INCREMENT_VOTE':
      return {
        ...state,
        vote: {
          ...state.vote,
          [action.id]: state.vote[action.id] + 1,
        },
      };
    case 'DECREMENT_VOTE':
      return {
        ...state,
        vote: {
          ...state.vote,
          [action.id]: state.vote[action.id] - 1,
        },
      };
    case 'SET_VOTE':
      console.log(action);
      return {
        ...state,
        vote: {
          ...state.vote,
          [action.id]: action.vote,
        },
      };
    default:
      return state;
  }
};
