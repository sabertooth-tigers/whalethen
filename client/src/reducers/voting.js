export default (state = {}, action) => {
  switch (action.type) {
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
