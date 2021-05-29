import { useState, FC, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, RouteChildrenProps } from 'react-router-dom';

import { PostAuthor } from './PostAuthor';
import { postUpdated } from './postsSlice';

interface Params {
  postId: string;
}

interface Props {}

export const EditPostForm: FC<RouteChildrenProps<Params> & Props> = ({ match }) => {
  const postId = match?.params.postId;
  const post = useSelector((state) => state.posts.find((post) => post.id === postId));
  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState(post?.title ?? '');
  const [content, setContent] = useState(post?.content ?? '');

  const onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const onContentChanged = (e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value);
  const onSavePostClicked = () => {
    if (postId && title && content && post) {
      dispatch(
        postUpdated({
          id: postId,
          title,
          content,
          userId: post?.userId,
        }),
      );
      history.push(`/post/${postId}`);
    }
  };

  if (post == null) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }
  return (
    <section>
      <h2>Edit Post</h2>
      <form className='form'>
        <div>
          <label htmlFor='postTitle'>Post Title: </label>
          <input
            type='text'
            id='postTitle'
            name='postTitle'
            placeholder="What's on your mind?"
            value={title}
            onChange={onTitleChanged}
          />
        </div>
        <div>
          <label htmlFor='postContent'>Content: </label>
          <textarea id='postContent' name='postContent' value={content} onChange={onContentChanged} />
        </div>
      </form>
      <p>
        <PostAuthor userId={post.userId} />
      </p>
      <button type='button' onClick={onSavePostClicked} className='button'>
        Save Post
      </button>
    </section>
  );
};
