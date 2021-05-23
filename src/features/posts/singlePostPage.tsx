import { useSelector } from 'react-redux';
import type { FC } from 'react';
import type { RouteChildrenProps } from 'react-router';

import { selectPost } from './postsSlice';
import styles from './singlePostPage.module.scss';

interface Params {
  postId: string;
}

export interface Props {}

export const SinglePostPage: FC<RouteChildrenProps<Params> & Props> = ({ match }) => {
  const postId = match?.params.postId;
  const post = useSelector(selectPost(postId));

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
      </article>
    </section>
  );
};
