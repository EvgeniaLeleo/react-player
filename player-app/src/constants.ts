import {
  bgColorToBgColorLight,
  colorToSecondary,
  extradarkToDark,
  extradarkToHover,
} from './utils/colorUtils';

import { createTheme } from '@mui/material';

export const COLOR_DARK_DEFAULT = '#ad61ff';

export const BGCOLOR = '#181818';
export const COLOR = '#ffffff';
export const COLOR_EXTRADARK = '#580ea2';

export const BGCOLOR_LIGHT = bgColorToBgColorLight(BGCOLOR); //'#1c1c1c';

export const COLOR_DARK = extradarkToDark(COLOR_EXTRADARK); //'#ad61ff';

export const COLOR_HOVER = extradarkToHover(COLOR_EXTRADARK); //`#D9B6FF`;

export const COLOR_SECONDARY = colorToSecondary(COLOR); //'#696969';

export const theme = createTheme({
  palette: {
    primary: {
      main: COLOR_EXTRADARK,
    },
  },
});

export const DEFAULT_LANG = 'ru';

export const NUMBER_OF_RANDOM_ITEMS = 10;

export const ORDER = { notSelected: 'notSelected', asc: 'ASC', desc: 'DESC' };

export const ALBUM_DAYPLAYLIST = 'dayplaylist';
export const ALBUM_DANCE = 'dance';
export const ALBUM_INDIE = 'indie';
export const ALBUM_FAVOURITES = 'favourites';

export const ALBUMS = {
  [ALBUM_DAYPLAYLIST]: {
    ru: 'Плейлист дня',
    en: 'Playlist of the day',
    bel: 'Плэйліст дня',
  },
  [ALBUM_DANCE]: {
    ru: '100 танцевальных хитов',
    en: '100 dance hits',
    bel: '100 танцавальных хітоў',
  },
  [ALBUM_INDIE]: {
    ru: 'Инди-заряд',
    en: 'Indie charge',
    bel: 'Індзі-зарад',
  },
  [ALBUM_FAVOURITES]: {
    ru: 'Мои треки',
    en: 'My tracks',
    bel: 'Мае трэкі',
  },
};

export const TEXT = {
  menu: {
    homepage: { ru: 'Главная', en: 'Homepage', bel: 'Галоўны' },
    mytracks: { ru: 'Мои треки', en: 'My tracks', bel: 'Мае трэкі' },
    karaoke: { ru: 'Караоке', en: 'Karaoke', bel: 'Караоке' },
    profile: {
      ru: 'Личный кабинет',
      en: 'Profile',
      bel: 'Профіль', // карыстальніка',
    },
    logout: { ru: 'Выйти', en: 'Logout', bel: 'Выйсці' },
  },
  searchInput: {
    ru: 'Поиск по исполнителю / названию песни',
    en: 'Search by artist or song title',
    bel: 'Пошук па артысту або назве песні',
  },
  header: { tracks: { ru: 'Треки', en: 'Tracks', bel: 'Трэк' } },
  collections: { ru: 'Подборки', en: 'Collections', bel: 'Падборка' },
  albums: ALBUMS,
  search: {
    // searchBy: { ru: 'Искать по:', en: 'Search by', bel: 'Шукаць па:' },
    searchBy: { ru: 'Фильтр по:', en: 'Filter by:', bel: 'Фільтр па:' },
    artist: { ru: 'исполнителю', en: 'artist', bel: 'выканаўца' },
    release: { ru: 'году выпуска', en: 'release date', bel: 'годзе выпуску' },
    genre: { ru: 'жанру', en: 'genre', bel: 'жанр' },
    order: {
      ru: 'Порядок',
      en: 'Order',
      bel: 'Парадак',
      default: {
        ru: 'по умолчанию',
        en: 'by default',
        bel: 'безумоўна',
      },
      oldToNew: {
        ru: 'от старых к новым',
        en: 'old to new',
        bel: 'ад старых да новых',
      },
      newToOld: {
        ru: 'от новых к старым',
        en: 'new to old',
        bel: 'ад новых да старых',
      },
    },
  },
  listHeader: {
    track: { ru: 'ТРЕК', en: 'TRACK', bel: 'ТРЭК' },
    artist: { ru: 'ИСПОЛНИТЕЛЬ', en: 'ARTIST', bel: 'ВЫКАНАЎЦА' },
    album: { ru: 'АЛЬБОМ', en: 'ALBUM', bel: 'АЛЬБОМ' },
  },
  profile: {
    userData: {
      ru: 'Данные пользователя',
      en: 'User data',
      bel: 'Дадзеныя карыстальніка',
    },
    userName: { ru: 'Имя:', en: 'User name:', bel: 'Імя:' },
    login: { ru: 'Логин:', en: 'Login:', bel: 'Лагін:' },
    custom: {
      ru: 'Кастомизация плеера',
      en: 'Customization of the player',
      bel: 'Кастомизация плэера',
    },
    bgcolor: { ru: 'Цвет фона:', en: 'Background:', bel: 'Колер фону:' },
    textColor: { ru: 'Цвет текста:', en: 'Text color:', bel: 'Колер тэксту:' },
    designColor: {
      ru: 'Цветовое оформление:',
      en: 'Color design:',
      bel: 'Каляровае афармленне:',
    },
    buttonText: {
      ru: 'Сброс цветовых настроек',
      en: 'Reset color settings',
      bel: 'Скід каляровых налад',
    },
    language: { ru: 'Язык', en: 'Language', bel: 'Мова' },
  },
  empty_results: {
    ru: 'Извините, Ваш запрос не дал результатов',
    en: 'Sorry, nothing was found',
    bel: 'Выбачайце, нічога не знайшлося',
  },
  no_favourites: {
    ru: 'Избранных треков пока нет',
    en: 'There are no favorite tracks yet',
    bel: 'Абраных трэкаў пакуль няма',
  },
};

export const EMPTY_ARTIST = 'sorry_empty_artist';

export const EMPTY_RESULTS = [
  {
    id: 0,
    author: EMPTY_ARTIST,
    name: 'empty',
  },
];

export const USER = { name: 'Evgenia Leleo', login: 'Leleo', avatar: '' };
