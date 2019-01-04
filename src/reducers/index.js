import { combineReducers } from 'redux';
// ↑これが全てのreducerファイルを統合する
// ↓統括するreducerファイルをimport
import events from "./events";

export default combineReducers({ events })
// reducerファイルを列挙していくだけで使用可能