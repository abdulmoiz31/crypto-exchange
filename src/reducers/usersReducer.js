const initialState = {
    listedUsers: [{email: "ahemahem@gmail.com", password: "tada@1234", incorrectAttempts: 0}],
  };
  
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add_user':
            return {
                ...state,
                listedUsers: [...state.listedUsers, action.payload], // Create a new array with the updated user
            };
        case 'update_user':
            const { index, property, value } = action.payload;
            const updatedUser = {
              ...state.listedUsers[index],
              [property]: value,
            };
            const updatedUsers = [...state.listedUsers];
            updatedUsers[index] = updatedUser;
            return {
              ...state,
              listedUsers: updatedUsers,
            };
      default:
        return state;
    }
  };
  
  export default usersReducer;