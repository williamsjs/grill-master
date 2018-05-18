import fetch from 'cross-fetch';
import appUrl from '../constants/appUrl';

const SIGN_OUT = 'SIGN_OUT';
const SIGN_IN_REQ = 'SIGN_IN_REQ';
const SIGN_IN_FAIL = 'SIGN_IN_FAIL';
const SIGN_IN_RES = 'SIGN_IN_RES';

const signInReq = () => ({type: SIGN_IN_REQ});
const signInRes = () => ({type: SIGN_IN_RES});
const signInFail = () => ({type: SIGN_IN_FAIL});
const signOut = () => ({type: SIGN_OUT});

export const signIn = (email, password) => {
  return function(dispatch) {
    dispatch(signInReq());

    const handleResponse = res => {
      res.status === 201 ? dispatch(signInRes()) : dispatch(signInFail());
      return res.json();
    };

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    const options = {
      method: 'POST',
      body: formData
    };

    fetch(`${appUrl}/user_token`, options)
      .then(handleResponse)
      .then(json => localStorage.setItem('jwt', json.jwt));
  }
};

const initialState = {
  loggedIn: false,
  fetching: false,
  signInFail: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_REQ:
      return {...state, fetching: true, signInFail: false };
    case SIGN_OUT:
      return {...state, fetching: false, loggedIn: false, email: undefined};
    case SIGN_IN_RES:
      return {...state, fetching: false, loggedIn: true, signInFail: false};
    case SIGN_IN_FAIL:
      return {...state, fetching: false, signInFail: true};
    default:
      return state;
  }
};

export default user;