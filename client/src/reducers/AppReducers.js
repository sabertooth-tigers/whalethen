export const createEventDay = (state = '', action) => {
  switch (action.type) {
    case 'ON_CREATE_DAY_SELECT':
      return action.query;
    default:
      return state;
  }
};

export const onInputChange = (state = {}, action) => {
  switch (action.type) {
    case 'ON_INPUT_CHANGE':
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};
