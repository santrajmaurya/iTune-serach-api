// import { call, put, takeEvery, all } from "redux-saga/effects";
// import * as api from "./api";

// export function* fetchSongs() {
//   try {
//     const output = yield call(api.getSongs);
//     yield put({ type: "FETCH_SONGS_SUCCESS", payload: output });
//   } catch (error) {
//     console.log("fetch songs error", error);
//   }
// }

// function* watchFetchSongs() {
//   yield takeEvery("FETCH_SONGS", fetchSongs);
// }

// export default function* rootSaga() {
//     yield all([
//         watchFetchSongs(),
//     ]);
// };

import { call, put, takeEvery, all } from "redux-saga/effects";
import * as api from "./api";

export function* fetchSongs({ payload }) {
         try {
           const output = yield call(api.getSongs, payload);
           yield put({ type: "FETCH_SONGS_SUCCESS", payload: output });
         } catch (error) {
           console.log("fetch posts error", error);
         }
       }

function* watchFetchSongs() {
  yield takeEvery("FETCH_SONGS", fetchSongs);
}

export default function* rootSaga() {
    yield all([
        watchFetchSongs(),
    ]);
};