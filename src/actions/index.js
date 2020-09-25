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

const SignInFailure = () => {
  return {
    type: 'SIGN_IN_FAILURE'
  }
}

export const fetchUserInfo = () => dispatch => {
   dispatch(fetchUserInfoRequest());
   return fetch('https://my-json-server.typicode.com/kevindongzg/demo/login')
  .then(res => res.json())
  .then(data => dispatch(fetchUserInfoReceive(data)))
  .catch( e => {
    dispatch(SignInFailure())
  });
};
