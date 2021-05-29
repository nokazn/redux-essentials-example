import { useSelector } from 'react-redux';
import type { FC } from 'react';

interface Props {
  userId: string;
}

export const PostAuthor: FC<Props> = ({ userId }) => {
  const author = useSelector((state) => state.users.find((user) => user.id === userId));
  return <span>by {author?.name ?? 'Unknown author'}</span>;
};
