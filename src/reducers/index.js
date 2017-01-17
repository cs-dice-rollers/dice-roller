import { combineReducers } from 'redux';
import dice from './dice';
import routes from './routes';

export default combineReducers({
  dice,
  routes,
});
