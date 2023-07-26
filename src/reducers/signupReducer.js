const initialState = {
        signupForm: {
            email: '',
            name: '',
            password: '',
            address: '',
            cnicDoc: null,
        }
      };

  const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'update_form':
            return {
                ...state,
                signupForm: {
                  ...state.signupForm,
                  ...action.payload,
                },
              };
        
      default:
        return state;
    }
  };
  
  export default signupReducer;