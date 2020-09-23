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

export const fetchUserInfo = () => dispatch => {
   dispatch(fetchUserInfoRequest());
   return fetch('https://my-json-server.typicode.com/kevindongzg/demo/login')
  .then(res => res.json())
  .then(data => dispatch(fetchUserInfoReceive(data)));
};
