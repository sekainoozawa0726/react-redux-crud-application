import axios from 'axios';
export const READ_EVENTS = 'READ_EVENTS';

// CRUD処理の際に使うベースURL
const ROOT_URL = 'https://udemy-utils.herokuappcom/api/v1';
const QUERY_STRING = '?token=token123';

export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events${QUERY_STRING}`);
  console.log(response);
  dispatch({ type: READ_EVENTS,response });
}