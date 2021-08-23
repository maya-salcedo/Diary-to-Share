import {
  DIARY_LIST_FAIL,
  DIARY_LIST_REQUEST,
  DIARY_LIST_SUCCESS,
} from '../constants/diaryConstants';

export const diaryListReducer = (
  state = { loading: true, diaries: [] },
  action
) => {
  switch (action.type) {
    case DIARY_LIST_REQUEST:
      return { loading: true };
    case DIARY_LIST_SUCCESS:
      return { loading: false, diaries: action.payload };
    case DIARY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
