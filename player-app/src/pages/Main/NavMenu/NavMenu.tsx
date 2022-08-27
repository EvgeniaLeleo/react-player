import React, { useState } from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './NavMenu.css';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../../components/Logo/Logo';
import { text, lang } from '../../../constants';
import { SpanChangeColor } from '../../../components/SpanChangeColor/SpanChangeColor';
import { useAppSelector } from '../../../hook';
import { lightenDarkenColor } from '../../../utils/utils';
const cnNavMenu = cn('NavMenu');

export const NavMenu: FC<{}> = () => {
  const textColor = useAppSelector((state) => state.colorTheme.textColor);
  const bgColor = useAppSelector((state) => state.colorTheme.bgColor);
  const bgColorLight = lightenDarkenColor(bgColor, 10);

  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <nav
      className={cnNavMenu()}
      style={
        isVisible
          ? { backgroundColor: bgColorLight }
          : { backgroundColor: bgColor }
      }
    >
      <NavLink to={'/main'}>
        <Logo textColor={textColor} />
      </NavLink>
      <IconButton className={cnNavMenu('Burger')} onClick={handleClick}>
        <MenuIcon
          className={cnNavMenu('Burger-Icon')}
          style={{ color: textColor }}
          sx={{ mb: 3.5 }}
        />
      </IconButton>
      {isVisible && (
        <ul className={cnNavMenu('List')}>
          <li>
            <NavLink
              className={cnNavMenu(null, ['List-Button'])}
              style={{ color: textColor }}
              to="/main"
            >
              <SpanChangeColor>{text.menu.homepage[lang]}</SpanChangeColor>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={cnNavMenu(null, ['List-Button'])}
              style={{ color: textColor }}
              to="/mytracks"
            >
              <SpanChangeColor>{text.menu.mytracks[lang]}</SpanChangeColor>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={cnNavMenu(null, ['List-Button'])}
              style={{ color: textColor }}
              to={'/profile'}
            >
              <SpanChangeColor>{text.menu.profile[lang]}</SpanChangeColor>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={cnNavMenu(null, ['List-Button'])}
              style={{ color: textColor }}
              to={'/'}
            >
              <SpanChangeColor>{text.menu.logout[lang]}</SpanChangeColor>
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};
