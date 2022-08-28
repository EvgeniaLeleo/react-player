import { Skeleton } from '@mui/material';
import { FC } from 'react';

type SkeletonRectProps = {
  color: string;
  width: string;
  margin: string;
  height?: string | undefined;
};

export const SkeletonRect: FC<SkeletonRectProps> = ({
  color,
  width,
  margin,
  height = '16px',
}) => (
  <Skeleton
    variant="rectangular"
    width={width}
    height={height}
    sx={{
      height: height,
      bgcolor: color,
      marginRight: margin,
      filter: 'opacity(0.25)',
    }}
  />
);
