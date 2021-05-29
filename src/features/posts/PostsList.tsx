import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import { PostAuthor } from './PostAuthor';
import styles from './PostsList.module.scss';

export const PostList = () => {
  const posts = useSelector((state) => state.posts);
  const renderedPosts = posts.map((post) => (
    <article className={styles.postExcerpt} key={post.id}>
      <h3>{post.title}</h3>
      <p className={styles.postContent}>{post.content.substring(0, 100)}</p>
      <div className={styles.postFooter}>
        <PostAuthor userId={post.userId} />
        <Link to={`/posts/${post.id}`} className={classnames('button', styles.mutedButton)}>
          View Post
        </Link>
      </div>
    </article>
  ));

  return (
    <section className={styles.postList} data-testid='posts'>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
