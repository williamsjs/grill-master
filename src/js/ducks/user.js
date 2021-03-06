import fetchWrapper from '../utilities/fetchWrapper';
import appUrl from '../constants/appUrl';
import { createOptions } from '../utilities/createOptions';

const SIGN_OUT = 'SIGN_OUT';
const SIGN_IN_REQ = 'SIGN_IN_REQ';
const SIGN_IN_FAIL = 'SIGN_IN_FAIL';
const SIGN_IN_RES = 'SIGN_IN_RES';
const SAVE_USER = 'SAVE_USER';
const TOGGLE_DROPDOWN = 'TOGGLE_DROPDOWN';
const HIDE_DROPDOWN = 'HIDE_DROPDOWN';
const PASSWORD_INPUT_CHANGE = 'PASSWORD_INPUT_CHANGE';
const EMAIL_INPUT_CHANGE = 'EMAIL_INPUT_CHANGE';

const signInReq = () => ({type: SIGN_IN_REQ});
const signInRes = () => ({type: SIGN_IN_RES});
const signInFail = () => ({type: SIGN_IN_FAIL});
const saveUser = (id, email) => ({type: SAVE_USER, id: id, email: email});

export const emailInputChange = email => ({type: EMAIL_INPUT_CHANGE, email: email});
export const passwordInputChange = password => ({type: PASSWORD_INPUT_CHANGE, password: password});
export const signOutAC = () => ({type: SIGN_OUT});
export const toggleDropdown = () => ({type: TOGGLE_DROPDOWN});
export const hideDropdown = () => ({type: HIDE_DROPDOWN});

export const signOut = () => {
  return dispatch => {
    if (localStorage.getItem('jwt')) {
      localStorage.removeItem('jwt');
    }

    dispatch(signOutAC());
  }
}

export const signIn = (email, password) => {
  return function(dispatch) {
    dispatch(signInReq());

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    const options = {
      method: 'POST',
      body: formData
    };

    fetchWrapper(`${appUrl}/user_token`, options)
      .then(json => {
        dispatch(signInRes())
        localStorage.setItem('jwt', json.jwt);
        getUserInfo()(dispatch.bind(this));
      }).catch(e => dispatch(signInFail()));
  }
};

export const getUserInfo = () => dispatch => {
  fetchWrapper(`${appUrl}/my_user`, createOptions())
    .then(json => dispatch(saveUser(json.id, json.email)));
};

const initialState = {
  loggedIn: false,
  fetching: false,
  signInFail: false,
  dropdownOpen: false,
  email: '',
  password: ''
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_REQ:
      return {...state, fetching: true, signInFail: false };
    case SIGN_OUT:
      return {...state, fetching: false, loggedIn: false, email: undefined, id: undefined, password: undefined};
    case SIGN_IN_RES:
      return {...state, fetching: false, loggedIn: true, signInFail: false};
    case SIGN_IN_FAIL:
      return {...state, fetching: false, signInFail: true};
    case SAVE_USER:
      return {...state, id: action.id, email: action.email, dropdownOpen: false, loggedIn: true};
    case TOGGLE_DROPDOWN:
      return {...state, dropdownOpen: !state.dropdownOpen};
    case HIDE_DROPDOWN:
      return {...state, dropdownOpen: false};
    case EMAIL_INPUT_CHANGE:
      return {...state, email: action.email};
    case PASSWORD_INPUT_CHANGE:
      return {...state, password: action.password};
    default:
      return state;
  }
};

export default user;