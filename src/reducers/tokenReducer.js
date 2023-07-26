const initialState = {
    token: ""
  };

const tokenReducer = (state = initialState, action) => {
switch (action.type) {
    case 'set_token':
        return {
            ...state,
            token: action.payload,
          };
    case 'remove_token':
        return {
            ...state,
            token: "",
          };
    
  default:
    return state;
}
};

export default tokenReducer;