const initialState = {};

function Reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case "SAVE_TRANSFERT_FROM_DATA":
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
