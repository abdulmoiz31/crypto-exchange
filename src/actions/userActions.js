export const addUser = (user) => {
    return {
      type: 'add_user',
      payload: user,
    };
  };

export const updateUser = (user) => {
  return {
    type: 'update_user',
    payload: user,
  };
};