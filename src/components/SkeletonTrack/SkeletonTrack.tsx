import { useAppSelector } from '../../hooks/hook'
import { lightenDarkenColor } from '../../utils/colorUtils'
import { SkeletonRect } from '../Skeleton/Skeleton'

import style from './style.module.css'

export const SkeletonTrack = () => {
  const textColor = useAppSelector((state) => state.colorTheme.textColor)
  const skeletonColor = lightenDarkenColor(textColor, -10)
  return (
    <div className={style.SkeletonTrack}>
      <SkeletonRect
        width="4%"
        margin="2%"
        height="100%"
        color={skeletonColor}
      />

      <SkeletonRect width="24%" margin="5%" color={skeletonColor} />

      <SkeletonRect width="20%" margin="5%" color={skeletonColor} />

      <SkeletonRect width="25%" margin="6%" color={skeletonColor} />

      <SkeletonRect width="9%" margin="0" color={skeletonColor} />
    </div>
  )
}
