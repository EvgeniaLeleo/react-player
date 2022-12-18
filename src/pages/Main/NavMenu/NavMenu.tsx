import { useState, FC } from 'react';
import { cn } from '@bem-react/classname';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import Logo from '../../../components/Logo/Logo';
import { TEXT } from '../../../constants';
import { SpanChangeColor } from '../../../components/changeColor/SpanChangeColor';
import { useAppDispatch, useAppSelector } from '../../../hook';
import {
  bgColorToBgColorLight,
  extradarkToDark,
  extradarkToHover,
} from '../../../utils/colorUtils';
import { openModal } from '../../../store/modalSlice';

import {
  updateCheckedArtists,
  updateCheckedYears,
  updateCheckedGenres,
  updateFilteredTracks,
  updateSearchedTracks,
  updateFilteredDanceTracks,
  updateSearchedTracksDance,
  updateFilteredRandomTracks,
  updateSearchedTracksRandom,
  updateFilteredFavouritesTracks,
  updateSearchedTracksFavourites,
} from '../../../store/filteredItemsSlice';
import { uploadAllTracks } from '../../../store/trackSlice';
import { getFinalItems } from '../../../utils/getFinalItems';
import { TSong, TCheckedItems } from '../../../types';
import { updateSearchQuery } from '../../../store/sortingSettingsSlice';
import { Animation } from '../../../components/Animation/Animation';
// import { Footer } from '../../../components/Footer/Footer';
import { LogoMenu } from '../../../components/Logo/LogoMenu';

import './NavMenu.css';

const cnNavMenu = cn('NavMenu');

const newFilter: TCheckedItems = {
  checkedArtists: [],
  checkedYears: [],
  checkedGenres: [],
};

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

  const allTracks: TSong[] = useAppSelector((state) => state.tracks.allTracks);
  const allTracksDance: TSong[] = useAppSelector(
    (state) => state.tracks.danceTracks,
  );
  const allTracksRandom = useAppSelector((state) => state.tracks.randomTracks);

  const allTracksFavourites = useAppSelector(
    (state) => state.tracks.favourites,
  );

  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const [isVisibleMobile, setIsVisibleMobile] = useState(false);

  const handleClickMobile = () => {
    setIsVisibleMobile(!isVisibleMobile);
  };

  const order = useAppSelector((state) => state.sortingSettings.order);

  const handleClickToMain = () => {
    const searchedItemsCurrent = allTracks;

    dispatch(updateCheckedGenres([]));
    dispatch(updateCheckedArtists([]));
    dispatch(updateCheckedYears([]));

    dispatch(updateFilteredTracks([]));
    dispatch(updateFilteredDanceTracks([]));
    dispatch(updateFilteredRandomTracks([]));
    dispatch(updateFilteredFavouritesTracks([]));

    dispatch(updateSearchQuery(''));
    dispatch(updateSearchedTracks(allTracks));
    dispatch(updateSearchedTracksDance(allTracksDance));
    dispatch(updateSearchedTracksRandom(allTracksRandom));
    dispatch(updateSearchedTracksFavourites(allTracksFavourites));

    const finalFilteredTracks = getFinalItems(
      allTracks,
      newFilter,
      searchedItemsCurrent,
      order,
    );

    dispatch(uploadAllTracks(finalFilteredTracks));
  };

  return (
    <>
      <div className={cnNavMenu('Wrapper-Desktop')}>
        <nav
          className={cnNavMenu()}
          style={
            isVisible
              ? { backgroundColor: bgColorLight }
              : { backgroundColor: bgColor }
          }
        >
          <NavLink to={'/main'} onClick={handleClickToMain}>
            <LogoMenu textColor={textColor} />
          </NavLink>

          <IconButton
            sx={{ marginBottom: '20px' }}
            className={cnNavMenu('Burger')}
            onClick={handleClick}
          >
            <MenuIcon
              className={cnNavMenu('Burger-Icon')}
              style={{ color: textColor }}
            />
          </IconButton>
          {isVisible && (
            <>
              <div className={cnNavMenu('List')}>
                <NavLink
                  className={cnNavMenu('List-Button')}
                  style={{ color: textColor }}
                  to="/main"
                >
                  <SpanChangeColor
                    colorHover={colorHover}
                    colorActive={colorDark}
                  >
                    {TEXT.menu.homepage[lang]}
                  </SpanChangeColor>
                </NavLink>

                <NavLink
                  onClick={handleClickToMain}
                  className={cnNavMenu('List-Button')}
                  style={{ color: textColor }}
                  to="/mytracks"
                >
                  <SpanChangeColor
                    colorHover={colorHover}
                    colorActive={colorDark}
                  >
                    {TEXT.menu.mytracks[lang]}
                  </SpanChangeColor>
                </NavLink>

                <NavLink
                  className={cnNavMenu('List-Button')}
                  style={{ color: textColor }}
                  to={'/profile'}
                >
                  <SpanChangeColor
                    colorHover={colorHover}
                    colorActive={colorDark}
                  >
                    {TEXT.menu.profile[lang]}
                  </SpanChangeColor>
                </NavLink>

                <button
                  onClick={() => dispatch(openModal())}
                  style={{ color: textColor }}
                  className={'Logout-Button'}
                >
                  <SpanChangeColor
                    colorHover={colorHover}
                    colorActive={colorDark}
                  >
                    {TEXT.menu.logout[lang]}
                  </SpanChangeColor>
                </button>
              </div>
              <div className={cnNavMenu('Animation-Top')}></div>
              <Animation></Animation>
            </>
          )}

          {!isVisible && (
            <>
              <div className={cnNavMenu('Footer-Top')}></div>
              {/* <Footer></Footer> */}
            </>
          )}
        </nav>
      </div>

      <div className={cnNavMenu('Burger-Mobile')}>
        <IconButton sx={{ mb: 3.5 }} onClick={handleClickMobile}>
          <MenuIcon
            className={cnNavMenu('Burger-Icon')}
            style={{ color: textColor }}
          />
        </IconButton>
      </div>
      <div className={cnNavMenu('Wrapper-Mobile')}>
        {isVisibleMobile && (
          <nav
            className={cnNavMenu()}
            style={{ backgroundColor: bgColorLight, paddingTop: '70px' }}
          >
            <NavLink to={'/main'} onClick={handleClickToMain}>
              <Logo textColor={textColor} />
            </NavLink>

            <>
              <div className={cnNavMenu('List')}>
                <NavLink
                  className={cnNavMenu('List-Button')}
                  style={{ color: textColor }}
                  to="/main"
                >
                  <SpanChangeColor
                    colorHover={colorHover}
                    colorActive={colorDark}
                  >
                    {TEXT.menu.homepage[lang]}
                  </SpanChangeColor>
                </NavLink>

                <NavLink
                  onClick={handleClickToMain}
                  className={cnNavMenu('List-Button')}
                  style={{ color: textColor }}
                  to="/mytracks"
                >
                  <SpanChangeColor
                    colorHover={colorHover}
                    colorActive={colorDark}
                  >
                    {TEXT.menu.mytracks[lang]}
                  </SpanChangeColor>
                </NavLink>

                <NavLink
                  className={cnNavMenu('List-Button')}
                  style={{ color: textColor }}
                  to={'/profile'}
                >
                  <SpanChangeColor
                    colorHover={colorHover}
                    colorActive={colorDark}
                  >
                    {TEXT.menu.profile[lang]}
                  </SpanChangeColor>
                </NavLink>

                <button
                  onClick={() => dispatch(openModal())}
                  style={{ color: textColor }}
                  className={'Logout-Button'}
                >
                  <SpanChangeColor
                    colorHover={colorHover}
                    colorActive={colorDark}
                  >
                    {TEXT.menu.logout[lang]}
                  </SpanChangeColor>
                </button>
              </div>
              <div className={cnNavMenu('Animation-Top')}></div>
              {/* <Footer></Footer> */}
            </>
          </nav>
        )}
      </div>
    </>
  );
};
