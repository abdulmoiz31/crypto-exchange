export const setToken = (token) => {
    return {
      type: 'set_token',
      payload: token,
    };
  };

export const removeToken = (token) => {
    return {
      type: 'remove_token',
      payload: '',
    };
  };