const initialState = {
    loginForm: {
        email: '',
        password: ''
    }
  };

const loginReducer = (state = initialState, action) => {
switch (action.type) {
    case 'update_form':
        return {
            ...state,
            loginForm: {
              ...state.loginForm,
              ...action.payload,
            },
          };
    
  default:
    return state;
}
};

export default loginReducer;