export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return [...state, action.event];
    case 'REMOVE_EVENT':
      return state.filter(event => event.id !== action.event.id);
    default:
      return state;
  }
};
