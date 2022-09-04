import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import { Box, Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './WelcomePage.css';

import './WelcomePage.css';
import { COLOR_DARK_DEFAULT } from '../../constants';
import { setVpnState } from '../../store/vpnSlice';
import { useAppDispatch } from '../../hook';

const cnWelcomePage = cn('WelcomePage');

export const WelcomePage: FC<{}> = () => {
  const dispatch = useAppDispatch();

  const handleEnableVpn = () => {
    dispatch(setVpnState(true));
  };

  const handleDisableVpn = () => {
    dispatch(setVpnState(false));
  };

  return (
    <div className={cnWelcomePage()}>
      <Box className={cnWelcomePage('Box')}>
        <Typography
          fontSize={22}
          fontWeight={600}
          marginBottom={3}
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
        <p className={cnWelcomePage('Text')}>
          Здравствуйте! Для корректной работы приложения необходим доступ к
          MongoDB.
        </p>
        <p className={cnWelcomePage('Text')}>
          Для этого может потребоваться VPN.
        </p>
        <p className={cnWelcomePage('Text')}>
          Без доступа к MongoDB отсутствует возможность авторизации, регистрации
          и добавления треков в избранное.
        </p>
        <NavLink to={'/login'} onClick={handleEnableVpn}>
          <Button
            color={'secondary'}
            variant={'contained'}
            sx={{
              width: '280px',
              height: '52px',
              padding: '10px 15px',
              marginBottom: '10px',
              marginTop: '16px',
              fontSize: '16px',
              textTransform: 'none',
            }}
          >
            У меня есть VPN
          </Button>
        </NavLink>
        <NavLink to={'/main'} onClick={handleDisableVpn}>
          <Button
            color={'secondary'}
            variant={'outlined'}
            sx={{
              width: '280px',
              height: '52px',
              padding: '10px 15px',
              fontSize: '16px',
              textTransform: 'none',
            }}
          >
            У меня нет VPN
          </Button>
        </NavLink>
      </Box>
    </div>
  );
};
