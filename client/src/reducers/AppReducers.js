export default (state = {}, action) => {
  switch (action.type) {
    case 'ON_INPUT_CHANGE':
      return {
        ...state,
        [action.name]: action.value,
      };
    case 'SET_TIMELINE_DATA':
      return {
        ...state,
        timelineData: action.data,
      };
    case 'SET_ID':
      return {
        ...state,
        timelineId: action.id,
      };
    case 'SET_DAYS':
      return {
        ...state,
        numberOfDays: action.days,
      };
    case 'CREATE_DAY_SELECT':
      return {
        ...state,
        createEventDay: action.days,
      };
    case 'SET_NEW_EVENT':
      return {
        ...state,
        newEvent: action.event,
      };
    case 'SET_NEW_EVENT_ADDRESS':
      return {
        ...state,
        newEventAddress: action.address,
      };
    case 'GET_TRIP':
      const { data } = action;
      const { timelineId, timelineName } = data[0];
      return {
        ...state,
        timelineData: data,
        timelineId,
        timelineName,
        numberOfDays: data.length,
      };
    case 'GET_TRIP_ERROR':
      console.log(action.error);
      return state;
    default:
      return state;
  }
};
