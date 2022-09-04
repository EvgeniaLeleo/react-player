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
}>`
  background-color: ${(p) => p.bgcolor};
`;

export const Animation = () => {
  const decorativeColor = useAppSelector(
    (state) => state.colorTheme.decorativeColor,
  );
  const colorHover = extradarkToHover(decorativeColor);
  const colorDark = extradarkToDark(decorativeColor);

  return (
    <div className={cnAnimation()}>
      <AnimationBar
        className={cnAnimation('Bar1')}
        bgcolor={colorHover}
      ></AnimationBar>
      <AnimationBar
        className={cnAnimation('Bar2')}
        bgcolor={lightenDarkenColor(colorDark, 25)}
      ></AnimationBar>
      <AnimationBar
        className={cnAnimation('Bar3')}
        bgcolor={colorDark}
      ></AnimationBar>
      <AnimationBar
        className={cnAnimation('Bar4')}
        bgcolor={lightenDarkenColor(decorativeColor, 25)}
      ></AnimationBar>
      <AnimationBar
        className={cnAnimation('Bar5')}
        bgcolor={decorativeColor}
      ></AnimationBar>
    </div>
  );
};
