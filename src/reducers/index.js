import { combineReducers } from 'redux';
// ↑これが全てのreducerファイルを統合する
// ↓統括するreducerファイルをimport
import events from "./events";

import { reducer as form } from 'redux-form';

export default combineReducers({ events, form })
// reducerファイルを列挙していくだけで使用可能