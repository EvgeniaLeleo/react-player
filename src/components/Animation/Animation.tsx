import { styled } from '@mui/material'

import { useAppSelector } from '../../hooks/hook'
import { decorativeColorSelector } from '../../store/selectors/colorThemeSelector'
import { autoplaySelector } from '../../store/selectors/tracksSelector'
import {
  extradarkToDark,
  extradarkToHover,
  lightenDarkenColor,
} from '../../utils/colorUtils'

import './Animation.css'

export const AnimationBar = styled('p')<{
  bgcolor: string
  animation: string
  animationDelay: string
}>`
  background-color: ${(p) => p.bgcolor};
  animation: ${(p) => p.animation};
  animation-delay: ${(p) => p.animationDelay};
`

export const Animation = () => {
  const decorativeColor = useAppSelector(decorativeColorSelector)
  const isPlaying = useAppSelector(autoplaySelector)

  const colorHover = extradarkToHover(decorativeColor)
  const colorDark = extradarkToDark(decorativeColor)

  const animationProp = 'equalize 6s 0s infinite;'
  const animation = isPlaying ? animationProp : 'none'

  return (
    <div className="Animation">
      <AnimationBar
        bgcolor={colorHover}
        animation={animation}
        animationDelay="-1.9s"
        className="Bar1"
      />
      <AnimationBar
        bgcolor={lightenDarkenColor(colorDark, 25)}
        animation={animation}
        animationDelay="-2.9s"
        className="Bar2"
      />
      <AnimationBar
        bgcolor={colorDark}
        animation={animation}
        animationDelay="-3.9s"
        className="Bar3"
      />
      <AnimationBar
        bgcolor={lightenDarkenColor(decorativeColor, 25)}
        animation={animation}
        animationDelay="-4.9s"
        className="Bar4"
      />
      <AnimationBar
        bgcolor={decorativeColor}
        animation={animation}
        animationDelay="-5.9s"
        className="Bar5"
      />
    </div>
  )
}
