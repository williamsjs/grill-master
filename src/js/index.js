import configureStore from './store/configureStore';
import { toggleMenu } from './actions/index';

window.store = configureStore();
window.toggleMenu = toggleMenu;