import { TOGGLE_MENU } from '../constants/action-types';

const initialState = {
  menuOpen: true
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU: 
      return {...state, menuOpen: !state.menuOpen};
  }
}
export default rootReducer;