import Axios from 'axios';
import {
  DIARY_LIST_FAIL,
  DIARY_LIST_REQUEST,
  DIARY_LIST_SUCCESS,
} from '../constants/diaryConstants';

export const listDiaries = () => async (dispatch) => {
  dispatch({
    type: DIARY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get('/api/testServer');
    dispatch({ type: DIARY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DIARY_LIST_FAIL, payload: error.message });
  }
};
