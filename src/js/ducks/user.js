const SIGN_IN = 'SIGN_IN';
const SIGN_OUT = 'SIGN_OUT';

export const signIn = email => ({type: SIGN_IN, email: email});
export const signOut = () => ({type: SIGN_OUT});

const initialState = {
  loggedIn: false
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {...state, loggedIn: true, email: action.email};
    case SIGN_OUT:
      return {...state, loggedIn: false, email: undefined};
    default:
      return state;
  }
};

export default user;