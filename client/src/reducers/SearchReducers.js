export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_ENTRIES':
    	console.log(action.data);
      return {
        ...state,
        searchList: action.data,
      };
    case 'SET_LOCATION':
      return {
        ...state,
        locationSearch: action.location,
      };
    case 'SET_CATEGORY':
      return {
        ...state,
        termBar: action.category,
      };
    default:
      return state;
  }
};
