const userInfo = (state = { logged: false, isFetching: false }, action) => {
  if (action.type === 'FETCH_USER_INFO_REQUEST') {
    return { ...state,  isFetching: true };
  }

  if (action.type === 'FETCH_USER_INFO_RECEIVE') {
    return { ...state, ...action.payload, logged: true, isFetching: false, netError: false };
  }

  if (action.type === 'CLEAR_USER_INFO') {
    return { logged: false };
  }
  
  if(action.type == 'SIGN_IN_FAILURE'){
    return{
      ...state, netError: true
    }
  }
  return state;
};

export default userInfo;
