import { takeEvery, takeLatest, delay, put } from "redux-saga/effects";

// INCREMENT

function* incrementAsync() {
  yield delay(4000);
  yield put({ type: "INCREMENT_ASYNC" });
}

export function* watchIncrement() {
  yield takeLatest("INCREMENT", incrementAsync);
}

// DECREMENT

function* decrementAsync() {
  yield delay(4000);
  yield put({ type: "DECREMENT_ASYNC" });
}

export function* watchDecrement() {
  yield takeEvery("DECREMENT", decrementAsync);
}
