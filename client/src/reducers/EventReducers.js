export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_VOTE':
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
