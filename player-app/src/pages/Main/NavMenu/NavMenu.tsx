import React, { useState } from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import { NavLink } from 'react-router-dom';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../../components/Logo/Logo';
import {
  BGCOLOR,
  COLOR,
  COLOR_EXTRADARK,
  DEFAULT_LANG,
  text,
} from '../../../constants';
import { SpanChangeColor } from '../../../components/changeColor/SpanChangeColor/SpanChangeColor';
import { useAppDispatch, useAppSelector } from '../../../hook';
import {
  bgColorToBgColorLight,
  extradarkToDark,
  extradarkToHover,
} from '../../../utils/colorUtils';

import './NavMenu.css';
import {
  changeBgColor,
  changeDecorativeColor,
  changeTextColor,
} from '../../../store/colorThemeSlice';
import { changeLanguage } from '../../../store/languageSlice';

const cnNavMenu = cn('NavMenu');

export const NavMenu: FC<{}> = () => {
  const dispatch = useAppDispatch();
  const lang = useAppSelector((state) => state.language.lang);

  const textColor = useAppSelector((state) => state.colorTheme.textColor);
  const bgColor = useAppSelector((state) => state.colorTheme.bgColor);
  const bgColorLight = bgColorToBgColorLight(bgColor);

  const decorativeColor = useAppSelector(
    (state) => state.colorTheme.decorativeColor,
  );

  const colorHover = extradarkToHover(decorativeColor);
  const colorDark = extradarkToDark(decorativeColor);

  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  // const currentTrack = useAppSelector((state) => state.tracks.currentTrack);
  // console.log(currentTrack);

  const handleLogOut = () => {
    localStorage.clear();

    dispatch(changeTextColor(COLOR));
    dispatch(changeBgColor(BGCOLOR));
    dispatch(changeDecorativeColor(COLOR_EXTRADARK));
    dispatch(changeLanguage(DEFAULT_LANG));
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
              <SpanChangeColor colorHover={colorHover} colorActive={colorDark}>
                {text.menu.homepage[lang]}
              </SpanChangeColor>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={cnNavMenu(null, ['List-Button'])}
              style={{ color: textColor }}
              to="/mytracks"
            >
              <SpanChangeColor colorHover={colorHover} colorActive={colorDark}>
                {text.menu.mytracks[lang]}
              </SpanChangeColor>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={cnNavMenu(null, ['List-Button'])}
              style={{ color: textColor }}
              to={'/profile'}
            >
              <SpanChangeColor colorHover={colorHover} colorActive={colorDark}>
                {text.menu.profile[lang]}
              </SpanChangeColor>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={cnNavMenu(null, ['List-Button'])}
              style={{ color: textColor }}
              to={'/'}
            >
              <SpanChangeColor
                colorHover={colorHover}
                colorActive={colorDark}
                onClick={handleLogOut}
              >
                {text.menu.logout[lang]}
              </SpanChangeColor>
            </NavLink>
          </li>
        </ul>
      )}

      {/* <audio
        src={currentTrack.urlPlay}
        id="player"
        controls
        loop
      ></audio> */}
    </nav>
  );
};
