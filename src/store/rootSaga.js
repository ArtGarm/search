import { all, fork } from 'redux-saga/effects';

// modules
import search from '../ui/modules/search/ducks/sagas';
import single from '../ui/modules/single/ducks/sagas';
import results from '../ui/modules/results/ducks/sagas';

const sagas = [search, single, results];

export default function* rootSaga() {
  yield all(sagas.flat().map((saga) => fork(saga)));
}
