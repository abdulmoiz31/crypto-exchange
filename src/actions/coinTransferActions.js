export const setCoin = (coin) => {
    return {
      type: 'set_coin',
      payload: coin,
    };
  };

export const removeCoin = () => {
    return {
      type: 'remove_coin',
      payload: '',
    };
  };