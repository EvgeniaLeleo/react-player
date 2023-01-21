import { Skeleton } from '@mui/material'
import { FC } from 'react'

type Props = {
  color: string
  width?: string
  margin: string
  height?: string
}

export const SkeletonRect: FC<Props> = ({ color, width, margin, height }) => (
  <Skeleton
    variant="rectangular"
    width={width}
    height={height}
    sx={{
      height: height,
      bgcolor: color,
      marginRight: margin,
      filter: 'opacity(0.25)',
      aspectRatio: '1/1',
    }}
  />
)
