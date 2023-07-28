const initialState = {
    transferCoin: ""
  };

const transferCoinReducer = (state = initialState, action) => {
switch (action.type) {
    case 'set_coin':
        return {
            ...state,
            transferCoin: action.payload,
          };
    case 'remove_coin':
        return {
            ...state,
            transferCoin: "",
          };
    
  default:
    return state;
}
};

export default transferCoinReducer;