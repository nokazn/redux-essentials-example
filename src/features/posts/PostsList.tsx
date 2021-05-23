import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import { selectPosts } from './postsSlice';
import styles from './PostsList.module.scss';

export const PostList = () => {
  const posts = useSelector(selectPosts);
  const renderedPosts = posts.map((post) => (
    <article className={styles.postExcerpt} key={post.id}>
      <h3>{post.title}</h3>
      <p className={styles.postContent}>{post.content.substring(0, 100)}</p>
      <Link to={`/posts/${post.id}`} className={classnames(styles.button, styles.mutedButton)}>
        View Post
      </Link>
    </article>
  ));

  return (
    <section className={styles.postList} data-testid='posts'>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
