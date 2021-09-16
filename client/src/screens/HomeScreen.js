import React, { useEffect } from 'react';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listDiaries } from '../actions/diaryActions';
import { HeaderContainer } from '../container/header';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const diaryList = useSelector((state) => state.diaryList);
  const { loading, error, diaries } = diaryList;

  useEffect(() => {
    dispatch(listDiaries());
  }, [dispatch]);

  return (
    <div>
      <HeaderContainer />
      <h1>Featured Diaries</h1>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : (
        <div>
          {diaries.map((diary) => (
            <div key={diary.title}>
              <h1>{diary.title}</h1>
              <p>{diary.content1}</p>
              <p>{diary.content2}</p>
              <p>{diary.content3}</p>
            </div>
          ))}
        </div>
      )}

      <h1>Diary Sharers</h1>
    </div>
  );
};

export default HomeScreen;
