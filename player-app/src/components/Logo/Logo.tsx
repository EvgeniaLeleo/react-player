import { Typography } from '@mui/material';
import React, { FC } from 'react';
import { COLOR, COLOR_DARK, COLOR_DARK_DEFAULT } from '../../constants';
import { SpanChangeColor } from '../SpanChangeColor/SpanChangeColor';

type typeLogoProps = {
  textColor: string;
};

const Logo: FC<typeLogoProps> = ({ textColor }) => {
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
      <Typography fontSize={22} fontWeight={600} marginBottom={5} color={COLOR}>
        <span
          style={{
            display: 'inline-block',
            marginLeft: '-7px',
            color: COLOR_DARK,
          }}
        >
          ▶
        </span>
        <span
          style={{
            display: 'inline-block',
            marginLeft: '-7px',
            color: COLOR_DARK,
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
