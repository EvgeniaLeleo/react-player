import { FC } from 'react';
import { cn } from '@bem-react/classname';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Button as MUIButton, createTheme, ThemeProvider } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { useAppDispatch, useAppSelector } from '../../../hook';
import { BGCOLOR, COLOR, COLOR_EXTRADARK, TEXT } from '../../../constants';
import {
  changeBgColor,
  changeDecorativeColor,
  changeTextColor,
} from '../../../store/colorThemeSlice';
import { colorToSecondary } from '../../../utils/colorUtils';
import { changeLanguage } from '../../../store/languageSlice';
import { TLanguages } from '../../../types';

import './Profile.css';

const cnProfile = cn('Profile');

export const Profile: FC = () => {
  const dispatch = useAppDispatch();
  const dataUser = useAppSelector((state) => state.auth.data);
  const lang = useAppSelector((state) => state.language.lang);
  const textColor = useAppSelector((state) => state.colorTheme.textColor);
  const bgColor = useAppSelector((state) => state.colorTheme.bgColor);
  const decorativeColor = useAppSelector(
    (state) => state.colorTheme.decorativeColor,
  );
  const textColorSecondary = colorToSecondary(textColor);

  const handleChange = (event: SelectChangeEvent) => {
    const newLanguage = event.target.value as TLanguages;
    dispatch(changeLanguage(newLanguage));
    localStorage.setItem('language', newLanguage);
  };

  const handleChangeBgColor = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    const newBgColor = event.target.value.toString();
    dispatch(changeBgColor(newBgColor));
    localStorage.setItem('bgColor', newBgColor);
  };

  const handleChangeTextColor = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    const newTextColor = event.target.value.toString();
    dispatch(changeTextColor(newTextColor));
    localStorage.setItem('textColor', newTextColor);
  };

  const handleChangeDecorativeColor = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    const newDecorativeColor = event.target.value.toString();
    dispatch(changeDecorativeColor(newDecorativeColor));
    localStorage.setItem('decorativeColor', newDecorativeColor);
  };

  const handleResetSettings = () => {
    dispatch(changeTextColor(COLOR));
    localStorage.setItem('textColor', COLOR);
    dispatch(changeBgColor(BGCOLOR));
    localStorage.setItem('bgColor', BGCOLOR);
    dispatch(changeDecorativeColor(COLOR_EXTRADARK));
    localStorage.setItem('decorativeColor', COLOR_EXTRADARK);
  };

  const buttonTheme = createTheme({
    palette: {
      primary: {
        main: decorativeColor,
      },
    },
  });

  return (
    <div className={cnProfile()}>
      <h2 style={{ color: textColor }} className={cnProfile('Header-Main')}>
        {TEXT.menu.profile[lang]}
      </h2>
      <div className={cnProfile('Data')} style={{ color: textColor }}>
        <h4
          className={cnProfile('Header')}
          style={{ color: textColorSecondary }}
        >
          {TEXT.profile.userData[lang]}
        </h4>
        <div className={cnProfile('UserData')}>
          {TEXT.profile.userName[lang]} {dataUser?.fullName}
        </div>
        <div className={cnProfile('UserData')}>
          {TEXT.profile.login[lang]} {dataUser?.email}
        </div>

        <h4
          className={cnProfile('Header')}
          style={{ color: textColorSecondary }}
        >
          {TEXT.profile.custom[lang]}
        </h4>
        <div className={cnProfile('Custom')}>
          <div className={cnProfile('CustomBgColor')}>
            <div>{TEXT.profile.bgcolor[lang]}</div>
            <input
              className={cnProfile('InputBgColor')}
              type="color"
              value={bgColor}
              onChange={handleChangeBgColor}
            ></input>
          </div>
          <div className={cnProfile('CustomTextColor')}>
            <div>{TEXT.profile.textColor[lang]}</div>
            <input
              className={cnProfile('InputTextColor')}
              type="color"
              value={textColor}
              onChange={handleChangeTextColor}
            ></input>
          </div>
          <div className={cnProfile('CustomDecorativeColor')}>
            <div>{TEXT.profile.designColor[lang]}</div>
            <input
              className={cnProfile('InputDecorativeColor')}
              type="color"
              value={decorativeColor}
              onChange={handleChangeDecorativeColor}
            ></input>
          </div>
        </div>

        <ThemeProvider theme={buttonTheme}>
          <MUIButton
            color={'primary'}
            variant={'contained'}
            sx={{
              width: '280px',
              height: '52px',
              padding: '10px 15px',
              mb: 2.5,
              mt: 1.5,
              fontSize: '16px',
              textTransform: 'none',
              color: textColor,
            }}
            onClick={handleResetSettings}
          >
            {TEXT.profile.buttonText[lang]}
          </MUIButton>
          <FormControl
            variant="standard"
            sx={{ m: 1, width: 110, margin: 0, marginTop: 3 }}
          >
            <InputLabel
              id="demo-simple-select-standard-label"
              style={{
                color: textColorSecondary,
                fontWeight: 'bold',
                fontSize: '20px',
                fontFamily: 'inherit',
              }}
            >
              {TEXT.profile.language[lang]}
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={lang}
              onChange={handleChange}
              label="Language"
              style={{ color: textColor }}
            >
              <MenuItem value={'ru'}>Русский</MenuItem>
              <MenuItem value={'en'}>English</MenuItem>
              <MenuItem value={'bel'}>Беларускі</MenuItem>
            </Select>
          </FormControl>
        </ThemeProvider>
      </div>
    </div>
  );
};
