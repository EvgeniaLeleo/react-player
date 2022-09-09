import { cn } from '@bem-react/classname';
import { styled } from '@mui/material';
import { useAppSelector } from '../../hook';
import {
  extradarkToDark,
  extradarkToHover,
  lightenDarkenColor,
} from '../../utils/colorUtils';

import './Animation.css';

const cnAnimation = cn('Animation');

export const AnimationBar = styled('p')<{
  bgcolor: string;
  animation: string;
  animationDelay: string;
}>`
  background-color: ${(p) => p.bgcolor};
  animation: ${(p) => p.animation};
  animation-delay: ${(p) => p.animationDelay};
`;

export const Animation = () => {
  const decorativeColor = useAppSelector(
    (state) => state.colorTheme.decorativeColor,
  );
  const colorHover = extradarkToHover(decorativeColor);
  const colorDark = extradarkToDark(decorativeColor);

  const isPlaying = useAppSelector((state) => state.tracks.autoplay);
  const animationProp = 'equalize 6s 0s infinite;';
  const animation = isPlaying ? animationProp : 'none';

  return (
    <div className={cnAnimation()}>
      <AnimationBar
        bgcolor={colorHover}
        animation={animation}
        animationDelay="-1.9s"
        className={cnAnimation('Bar1')}
      ></AnimationBar>
      <AnimationBar
        bgcolor={lightenDarkenColor(colorDark, 25)}
        animation={animation}
        animationDelay="-2.9s"
        className={cnAnimation('Bar2')}
      ></AnimationBar>
      <AnimationBar
        bgcolor={colorDark}
        animation={animation}
        animationDelay="-3.9s"
        className={cnAnimation('Bar3')}
      ></AnimationBar>
      <AnimationBar
        bgcolor={lightenDarkenColor(decorativeColor, 25)}
        animation={animation}
        animationDelay="-4.9s"
        className={cnAnimation('Bar4')}
      ></AnimationBar>
      <AnimationBar
        bgcolor={decorativeColor}
        animation={animation}
        animationDelay="-5.9s"
        className={cnAnimation('Bar5')}
      ></AnimationBar>
    </div>
  );
};
