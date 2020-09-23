export const clearUserInfo = () => {
  // eslint-disable-line
  return {
    type: 'CLEAR_USER_INFO'
  };
}

const fetchUserInfoRequest = () => {
  return {
    type: 'FETCH_USER_INFO_REQUEST'
  };
};

const fetchUserInfoReceive = data => {
  return {
    type: 'FETCH_USER_INFO_RECEIVE',
    payload: data
  };
};

export const fetchUserInfo = (dispatch, url) => {
  dispatch(fetchUserInfoRequest());
  return fetch(url).then(res =>
    fetchUserInfoReceive(res.json())
  );
};