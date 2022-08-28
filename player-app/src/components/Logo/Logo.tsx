import { Typography } from '@mui/material';
import React, { FC } from 'react';
import { COLOR_DARK_DEFAULT } from '../../constants';
import { useAppSelector } from '../../hook';
import { lightenDarkenColor } from '../../utils/utils';
import { SpanChangeColor } from '../SpanChangeColor/SpanChangeColor';

type typeLogoProps = {
  textColor: string;
};

const Logo: FC<typeLogoProps> = ({ textColor }) => {
  const textColorStore = useAppSelector((state) => state.colorTheme.textColor);
  const decorativeColor = useAppSelector(
    (state) => state.colorTheme.decorativeColor,
  );

  const decorativeColorDark = lightenDarkenColor(decorativeColor, 60);

  if (textColor === 'default') {
    return (
      <Typography
        fontSize={22}
        fontWeight={600}
        marginBottom={5}
        color={'#000000'}
      >
        <span
          style={{
            display: 'inline-block',
            marginLeft: '-7px',
            color: COLOR_DARK_DEFAULT,
          }}
        >
          ▶
        </span>
        <span
          style={{
            display: 'inline-block',
            marginLeft: '-7px',
            color: COLOR_DARK_DEFAULT,
          }}
        >
          ▶
        </span>{' '}
        LePLAYER
      </Typography>
    );
  } else {
    return (
      <Typography
        fontSize={22}
        fontWeight={600}
        marginBottom={5}
        color={textColorStore}
      >
        <span
          style={{
            display: 'inline-block',
            marginLeft: '-7px',
            color: decorativeColorDark,
          }}
        >
          ▶
        </span>
        <span
          style={{
            display: 'inline-block',
            marginLeft: '-7px',
            color: decorativeColorDark,
          }}
        >
          ▶
        </span>{' '}
        <SpanChangeColor>LePLAYER</SpanChangeColor>
      </Typography>
    );
  }
};

export default Logo;
