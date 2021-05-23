import { useSelector } from 'react-redux';
import type { FC } from 'react';

import { selectUser } from '../users/usersSlice';

interface Props {
  userId: string;
}

export const PostAuthor: FC<Props> = ({ userId }) => {
  const author = useSelector(selectUser(userId));
  return <span>by {author?.name ?? 'Unknown author'}</span>;
};
