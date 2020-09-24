import { call, put, takeLatest } from 'redux-saga/effects';
import dataProvider from '../../../../../utils/dataProvider';
import { results as resultAction } from '../index';

function* fetch({ payload }) {
  try {
    const { results } = yield call(dataProvider.search, payload);

    yield put({
      type: resultAction.success,
      payload: { results: results.work ? [results.work].flat() : [] },
    });
  } catch ({ error }) {
    yield put({ type: resultAction.failed });
  }
}

function* fetchBookSaga() {
  yield takeLatest(resultAction.requested, fetch);
}

export default fetchBookSaga;
