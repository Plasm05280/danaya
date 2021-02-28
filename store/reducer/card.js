const initialState = {};

function Reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case "SELECT":
      newState = {
        ...state,
        niveau: action.value,
      };
      return newState;
    default:
      return state;
      break;
  }
}

export default Reducer;
