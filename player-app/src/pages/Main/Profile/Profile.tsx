import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useAppDispatch, useAppSelector } from '../../../hook';

import './Profile.css';
import { Typography } from '@mui/material';
import { COLOR, text, USER } from '../../../constants';
import {
  changeBgColor,
  changeDecorativeColor,
  changeTextColor,
} from '../../../store/colorThemeSlice';
import { lightenDarkenColor } from '../../../utils/utils';
import { changeLanguage } from '../../../store/languageSlice';
import { TLanguages } from '../../../types';

const cnProfile = cn('Profile');

export const Profile: FC = () => {
  const dispatch = useAppDispatch();

  const lang = useAppSelector((state) => state.language.lang);
  // const textColor = useAppSelector((state) => state.colorTheme.textColor);
  const textColor = localStorage.getItem('textColor') || COLOR;
  const bgColor = useAppSelector((state) => state.colorTheme.bgColor);
  const decorativeColor = useAppSelector(
    (state) => state.colorTheme.decorativeColor,
  );

  const textColorSecondary = lightenDarkenColor(textColor, -120);
  const decorativeColorDark = lightenDarkenColor(decorativeColor, 60);

  // localStorage.setItem('textColor', textColor);
  // localStorage.setItem('bgColor', bgColor);
  // localStorage.setItem('decorativeColor', decorativeColor);
  // localStorage.setItem('textColorSecondary', textColorSecondary);
  // localStorage.setItem('decorativeColorDark', decorativeColorDark);

  const [language, setLanguage] = React.useState(lang);
  const [bgColorInput, setBgColorInput] = React.useState(bgColor);
  const [textColorInput, setTextColorInput] = React.useState(textColor);
  const [decorativeColorInput, setDecorativeColorInput] =
    React.useState(decorativeColor);

  const handleChange = (event: SelectChangeEvent) => {
    const newLanguage = event.target.value as TLanguages;
    setLanguage(newLanguage);
    dispatch(changeLanguage(newLanguage));
    localStorage.setItem('language', newLanguage);
  };

  const handleChangeBgColor = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setBgColorInput(event.target.value);
    dispatch(changeBgColor(event.target.value));
  };

  const handleChangeTextColor = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTextColorInput(event.target.value);
    const newcolor = event.target.value.toString();
    // dispatch(changeTextColor(event.target.value));
    localStorage.setItem('textColor', newcolor);
  };

  const handleChangeDecorativeColor = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setDecorativeColorInput(event.target.value);
    dispatch(changeDecorativeColor(event.target.value));
  };

  return (
    <div className={cnProfile()}>
      <Typography
        variant="h2"
        marginTop={11}
        marginBottom={6}
        style={{ color: textColor }}
      >
        {text.menu.profile[lang]}
      </Typography>
      <div className={cnProfile('Data')} style={{ color: textColor }}>
        <h4
          className={cnProfile('Header')}
          style={{ color: textColorSecondary }}
        >
          {text.profile.userData[lang]}
        </h4>
        <div className={cnProfile('UserData')}>
          {text.profile.userName[lang]} {USER.name}
        </div>
        <div className={cnProfile('UserData')}>
          {text.profile.login[lang]} {USER.login}
        </div>

        <h4
          className={cnProfile('Header')}
          style={{ color: textColorSecondary }}
        >
          {text.profile.custom[lang]}
        </h4>
        <div className={cnProfile('Custom')}>
          <div className={cnProfile('CustomBgColor')}>
            <div>{text.profile.bgcolor[lang]}</div>
            <input
              className={cnProfile('InputBgColor')}
              type="color"
              value={bgColor}
              onChange={handleChangeBgColor}
            ></input>
          </div>
          <div className={cnProfile('CustomTextColor')}>
            <div>{text.profile.textColor[lang]}</div>
            <input
              className={cnProfile('InputTextColor')}
              type="color"
              value={textColor}
              onChange={handleChangeTextColor}
            ></input>
          </div>
          <div className={cnProfile('CustomDecorativeColor')}>
            <div>{text.profile.designColor[lang]}</div>
            <input
              className={cnProfile('InputDecorativeColor')}
              type="color"
              value={decorativeColor}
              onChange={handleChangeDecorativeColor}
            ></input>
          </div>
        </div>

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
            {text.profile.language[lang]}
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={language}
            onChange={handleChange}
            label="Language"
            style={{ color: textColor }}
          >
            <MenuItem value={'ru'}>Русский</MenuItem>
            <MenuItem value={'en'}>English</MenuItem>
            <MenuItem value={'bel'}>Беларускі</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};
