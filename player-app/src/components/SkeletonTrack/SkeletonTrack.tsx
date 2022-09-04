import { cn } from '@bem-react/classname';
import { useAppSelector } from '../../hook';
import { lightenDarkenColor } from '../../utils/colorUtils';
import { SkeletonRect } from '../Skeleton/Skeleton';

import './SkeletonTrack.css';

const cnSkeletonTrack = cn('SkeletonTrack');

export const SkeletonTrack = () => {
  const textColor = useAppSelector((state) => state.colorTheme.textColor);
  const skeletonColor = lightenDarkenColor(textColor, -10);
  return (
    <div className={cnSkeletonTrack()}>
      <SkeletonRect
        width="4%"
        margin="2%"
        height="45px"
        color={skeletonColor}
      ></SkeletonRect>

      <SkeletonRect
        width="24%"
        margin="5%"
        color={skeletonColor}
      ></SkeletonRect>

      <SkeletonRect
        width="20%"
        margin="5%"
        color={skeletonColor}
      ></SkeletonRect>

      <SkeletonRect
        width="25%"
        margin="6%"
        color={skeletonColor}
      ></SkeletonRect>

      <SkeletonRect width="9%" margin="0" color={skeletonColor}></SkeletonRect>
    </div>
  );
};
