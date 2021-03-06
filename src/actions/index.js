import axios from 'axios';

export const READ_EVENTS = 'READ_EVENTS';
const CREATE_EVENT = 'CREATE_EVENT';

// CRUD処理の際に使うベースURL
const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1';
const QUERY_STRING = '?token=token123';

export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events${QUERY_STRING}`);
  dispatch({ type: READ_EVENTS, response });
}

export const postEvent = values => async dispatch => {
  const response = await axios.post(`${ROOT_URL}/events${QUERY_STRING}`, values);
  dispatch({ type: CREATE_EVENT, response });
}