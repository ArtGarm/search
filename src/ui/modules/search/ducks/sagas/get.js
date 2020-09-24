import { call, put, debounce } from 'redux-saga/effects';
import dataProvider from '../../../../../utils/dataProvider';
import { search } from '../index';

function* fetch({ payload }) {
  try {
    const { results } = yield call(dataProvider.search, payload);

    yield put({
      type: search.success,
      payload: { results: results.work ? [results.work].flat() : [] },
    });
  } catch ({ error }) {
    yield put({ type: search.failed });
  }
}

function* fetchBookSaga() {
  yield debounce(1000, search.requested, fetch);
}

export default fetchBookSaga;
