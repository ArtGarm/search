import { call, put, takeLatest } from 'redux-saga/effects';
import dataProvider from '../../../../../utils/dataProvider';
import { single } from '../index';

function* fetch({ payload }) {
  try {
    const { results } = yield call(dataProvider.single, payload);

    yield put({
      type: single.success,
      payload: { results },
    });
  } catch ({ error }) {
    yield put({ type: single.failed });
  }
}

function* fetchSingleSaga() {
  yield takeLatest(single.requested, fetch);
}

export default fetchSingleSaga;
