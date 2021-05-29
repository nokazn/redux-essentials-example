import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import { PostAuthor } from './PostAuthor';
import { TimeAgo } from './TimeAgo';
import styles from './PostsList.module.scss';

export const PostList = () => {
  const posts = useSelector((state) => state.posts);
  // Sort posts in reverse chronological order by datetime string
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <article className={styles.postExcerpt} key={post.id}>
      <h3>{post.title}</h3>
      <p className={styles.postContent}>{post.content.substring(0, 100)}</p>
      <div className={styles.postFooter}>
        <span className={styles.postDetail}>
          <TimeAgo timestamp={post.date} />
          <PostAuthor userId={post.userId} />
        </span>
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
