import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import type { FC } from 'react';
import type { RouteChildrenProps } from 'react-router';

import { PostAuthor } from './PostAuthor';
import styles from './SinglePostPage.module.scss';

interface Params {
  postId: string;
}

export interface Props {}

export const SinglePostPage: FC<RouteChildrenProps<Params> & Props> = ({ match }) => {
  const postId = match?.params.postId;
  const post = useSelector((state) => state.posts.find((post) => post.id === postId));

  if (post == null) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }
  return (
    <section>
      <article className={styles.post}>
        <h2>{post.title}</h2>
        <p className={styles.postContent}>{post.content}</p>
        <p>
          <PostAuthor userId={post.userId} />
        </p>
        <Link to={`/posts/edit/${post.id}`}>Edit Post</Link>
      </article>
    </section>
  );
};
