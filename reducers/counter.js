const initialState = {
  counter: 0,
  totalClicks: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "COUNTER.ADD_CLICK": {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case "COUNTER.DELETE_CLICK": {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    case "COUNTER.ADD_TOTAL_CLICK": {
      return {
        ...state,
        totalClicks: state.totalClicks + 1,
      };
    }
    default:
      return state;
  }
};

export default counterReducer;
