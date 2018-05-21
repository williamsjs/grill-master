const TOGGLE_MENU = 'TOGGLE_MENU';

export const toggleMenu = () => ({type: TOGGLE_MENU});

const menuToggle = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return !state;
    default:
      return state;
  }
}
  
export default menuToggle;
