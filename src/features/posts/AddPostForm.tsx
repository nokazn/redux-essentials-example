import { useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { postAdded } from './postsSlice';
import { selectUsers } from '../users/usersSlice';

export const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');
  const isSubmittable = title !== '' && content !== '' && userId !== '';

  const dispatch = useDispatch();

  const users = useSelector(selectUsers);
  const onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const onContentChanged = (e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value);
  const onAuthorChanged = (e: ChangeEvent<HTMLSelectElement>) => setUserId(e.target.value);
  const onSavePostClicked = () => {
    if (isSubmittable) {
      dispatch(
        postAdded({
          title,
          content,
          userId,
        }),
      );
      setTitle('');
      setContent('');
    }
  };

  const UserOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a New Post</h2>
      <form className='form'>
        <div>
          <label htmlFor='postTitle'>Post Title: </label>
          <input type='text' id='postTitle' name='postTitle' value={title} onChange={onTitleChanged} />
        </div>
        <div>
          <label htmlFor='postAuthor'>Author: </label>
          <select id='postAuthor' value={userId} onChange={onAuthorChanged}>
            <option value='' />
            {UserOptions}
          </select>
        </div>
        <div>
          <label htmlFor='postContent'>Content: </label>
          <textarea id='postContent' name='postContent' value={content} onChange={onContentChanged} />
        </div>
        <button type='button' onClick={onSavePostClicked} disabled={!isSubmittable}>
          Save Post
        </button>
      </form>
    </section>
  );
};
