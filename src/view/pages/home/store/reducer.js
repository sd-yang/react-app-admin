const defaultState = {
  list: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
  case 'test':
    return state;
  default:
    return state;
  }
};
