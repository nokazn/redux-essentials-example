import { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import { postAdded } from './postsSlice';

export const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const isSubmittable = title !== '' && content !== '';

  const dispatch = useDispatch();

  const onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const onContentChanged = (e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value);
  const onSavePostClicked = () => {
    if (isSubmittable) {
      dispatch(
        postAdded({
          title,
          content,
        }),
      );
      setTitle('');
      setContent('');
    }
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor='postTitle'>Post Title:</label>
        <input type='text' id='postTitle' name='postTitle' value={title} onChange={onTitleChanged} />
        <label htmlFor='postContent'>Content:</label>
        <textarea id='postContent' name='postContent' value={content} onChange={onContentChanged} />
        <button type='button' onClick={onSavePostClicked} disabled={!isSubmittable}>
          Save Post
        </button>
      </form>
    </section>
  );
};
