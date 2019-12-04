import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { history } from 'utils/history';
import sampleReducer from './sampleReducer';

export default combineReducers({
  router: connectRouter(history),
  sampleReducer,
});
