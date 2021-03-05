const initialState = {
  input: "",
  selectedCard: "",
  selectedCrypto: "",
  phoneNumber: "",
  wallet: "",
  amount: "",
};

function Reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case "ADD_INPUT":
      newState = {
        ...state,
        input: action.value,
      };
      return newState;
    case "SELECT_CARD":
      newState = {
        ...state,
        selectedCard: action.value,
      };
      return newState;
    case "SELECT_CRYPTO":
      newState = {
        ...state,
        selectedCrypto: action.value,
      };
      return newState;
    case "SAVE_NUMBER":
      newState = {
        ...state,
        phoneNumber: action.value,
      };
      return newState;
    case "SAVE_WALLET":
      newState = {
        ...state,
        wallet: action.value,
      };
      return newState;

    case "SAVE_AMOUNT":
      newState = {
        ...state,
        amount: action.value,
      };
      return newState;
    default:
      return state;
      break;
  }
}

export default Reducer;
