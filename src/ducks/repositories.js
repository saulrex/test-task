import { call, put, takeEvery } from 'redux-saga/effects';
import { createAsyncAction } from './utils';
import {searchRepositories} from "./api";

/**
 * CONSTANTS
 */
export const GET_REPOSITORIES = `repositories/GET_REPOSITORIES`;

/**
 * ACTION CREATORS
 */
export const actionGetRepositories = createAsyncAction(GET_REPOSITORIES);

/**
 * REDUCERS
 */
export default (state = {}, { type, payload}) => {
  switch (type) {
    case `${actionGetRepositories.start}`:
      return { loading: true };
    case `${actionGetRepositories.success}`:
      return {
        loading: false,
        items: payload.items.slice(0, 5).map(({ name, description }) => {
          return { name, description }
        })
      }
    case `${actionGetRepositories.failure}`:
      return { loading: false };
    default:
      return state;
  }
}

/**
 * SAGAS
 */
function* sagaGetRepositories({ payload: { search }}) {

  yield put(actionGetRepositories.start());

  try {
    const { items } = yield call(() => {
      return fetch(searchRepositories(search)).then(function(res) {
        return res.json();
      });
    });

    yield put(actionGetRepositories.success({ items }));
  } catch (e) {
    yield put(actionGetRepositories.failure({ e }));
  }
}

export function* saga() {
  yield takeEvery(actionGetRepositories, sagaGetRepositories)
}