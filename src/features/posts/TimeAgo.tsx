import type { FC } from 'react';
import { parseISO, formatDistanceToNow } from 'date-fns';

interface Props {
  timestamp: string | undefined;
}

const formatTimestamp = (timestamp: string | undefined): string => {
  if (timestamp == null) return '';
  const date = parseISO(timestamp);
  const timePeriod = formatDistanceToNow(date);
  return `${timePeriod} ago`;
};

export const TimeAgo: FC<Props> = ({ timestamp }) => {
  const timeAgo = formatTimestamp(timestamp);
  return (
    <span title={timestamp}>
      <i>{timeAgo}</i>
    </span>
  );
};
