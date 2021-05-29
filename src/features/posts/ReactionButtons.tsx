import { useDispatch } from 'react-redux';
import classnames from 'classnames';
import type { FC } from 'react';

import styles from './ReactionButtons.module.scss';
import { REACTION_EMOJI, reactionAdded } from './postsSlice';
import type { Post, ReactionKeys, ReactionEmojis } from './postsSlice';

interface Props {
  post: Post;
}

export const ReactionButtons: FC<Props> = ({ post }) => {
  const dispatch = useDispatch();

  const reactionsEntries = Object.entries(REACTION_EMOJI) as [ReactionKeys, ReactionEmojis][];
  const reactionButtons = reactionsEntries.map(([reaction, emoji]) => {
    return (
      <button
        key={reaction}
        type='button'
        className={classnames('button', styles.reactionButton)}
        onClick={() => {
          dispatch(
            reactionAdded({
              postId: post.id,
              reaction,
            }),
          );
        }}
      >
        {emoji} {post.reactions[reaction]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};
