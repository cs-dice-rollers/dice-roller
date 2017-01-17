import { combineReducers } from 'redux';
import counter from './counter';
import dice from './dice';
import routes from './routes';

export default combineReducers({
  counter,
  dice,
  routes,
});
