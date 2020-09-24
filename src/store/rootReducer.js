import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// modules
import searchReducer from '../ui/modules/search/ducks';
import singleReducer from '../ui/modules/single/ducks';
import resultReducer from '../ui/modules/results/ducks';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    search: searchReducer,
    single: singleReducer,
    result: resultReducer,
  });

export default rootReducer;
