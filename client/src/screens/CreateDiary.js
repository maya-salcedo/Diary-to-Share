import React from 'react';

const CreateDiary = () => {
  return (
    <div>
      <form>
        <div>
          <h1>Dear Diary,</h1>
        </div>
        <div>
          <label>Title:</label>
          <input type="text" placeholder="Title"></input>
        </div>
        <div>
          <label>Write freely:</label>
          <textarea placeholder="Write down your thoughts, feelings and opinions"></textarea>
        </div>
        <div>
          <button type="submit">Post diary</button>
        </div>
      </form>
    </div>
  );
};

export default CreateDiary;
