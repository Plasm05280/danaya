const initialState = { input: "" };

function Reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case "ADD_INPUT":
      newState = {
        ...state,
        input: action.value,
      };
      return newState;
    default:
      return state;
      break;
  }
}

export default Reducer;
