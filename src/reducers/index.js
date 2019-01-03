import { combineReducers } from 'redux';
// ↑これが全てのreducerファイルを統合する
// ↓統括するreducerファイルをimport
import count from "./count";

export default combineReducers({ count })
// reducerファイルを列挙していくだけで使用可能