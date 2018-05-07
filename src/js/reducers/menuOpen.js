import { TOGGLE_MENU } from '../constants/action-types';

const menuOpen = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return !state;
    default:
      return state;
  }
}

export default menuOpen;