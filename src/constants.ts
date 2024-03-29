import { createTheme } from '@mui/material'
import { ErrorTypes } from './types'

import {
  bgColorToBgColorLight,
  colorToSecondary,
  extradarkToDark,
  extradarkToHover,
} from './utils/colorUtils'

export const URL_API = 'http://51.250.72.80:8090/'

export const COLOR_DARK_DEFAULT = '#ad61ff'

export const BGCOLOR = '#181818'
export const COLOR = '#ffffff'
export const COLOR_EXTRADARK = '#580ea2'

export const BGCOLOR_LIGHT = bgColorToBgColorLight(BGCOLOR) //'#1c1c1c';

export const COLOR_DARK = extradarkToDark(COLOR_EXTRADARK) //'#ad61ff';

export const COLOR_HOVER = extradarkToHover(COLOR_EXTRADARK) //`#D9B6FF`;

export const COLOR_SECONDARY = colorToSecondary(COLOR) //'#696969';

export const theme = createTheme({
  palette: {
    primary: {
      main: COLOR_EXTRADARK,
    },
  },
})

export const DEFAULT_LANG = 'ru'

export const NUMBER_OF_RANDOM_ITEMS = 10

export const ORDER = { notSelected: 'notSelected', asc: 'ASC', desc: 'DESC' }

export const HEADERS = {
  tracks: { ru: 'Треки', en: 'Tracks', bel: 'Трэк' },
  mytracks: {
    ru: 'Мои треки',
    en: 'My tracks',
    bel: 'Мае трэкі',
  },
  dayplaylist: {
    ru: 'Плейлист дня',
    en: 'Playlist of the day',
    bel: 'Плэйліст дня',
  },
  dance: {
    ru: '100 танцевальных хитов',
    en: '100 dance hits',
    bel: '100 танцавальных хітоў',
  },
  indie: {
    ru: 'Инди-заряд',
    en: 'Indie charge',
    bel: 'Індзі-зарад',
  },
  classics: {
    ru: 'Классическая музыка',
    en: 'Classic music',
    bel: 'Класічная музыка',
  },
  rocks: {
    ru: 'Рок музыка',
    en: 'Rock music',
    bel: 'Рок-музыка',
  },
  favorites: {
    ru: 'Мои треки',
    en: 'My tracks',
    bel: 'Мае трэкі',
  },
  electro: {
    ru: 'Электронная музыка',
    en: 'Electro music',
    bel: 'Электронная музыка',
  },
  profile: {
    ru: 'Личный кабинет',
    en: 'Profile',
    bel: 'Профіль',
  },
}

export const TEXT = {
  menu: {
    homepage: { ru: 'Главная', en: 'Homepage', bel: 'Галоўны' },
    profile: {
      ru: 'Личный кабинет',
      en: 'Profile',
      bel: 'Профіль',
    },
    mytracks: {
      ru: 'Мои треки',
      en: 'My tracks',
      bel: 'Мае трэкі',
    },
    logout: { ru: 'Выйти', en: 'Logout', bel: 'Выйсці' },
  },
  searchInput: {
    ru: 'Поиск по исполнителю / названию песни',
    en: 'Search by artist or song title',
    bel: 'Пошук па артысту або назве песні',
  },
  header: HEADERS,
  collections: { ru: 'Подборки', en: 'Collections', bel: 'Падборка' },
  search: {
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
    ru: 'Избранных треков нет',
    en: 'There are no favorite tracks',
    bel: 'Выбраных трэкаў няма',
  },
}

export const EMPTY_ARTIST = 'sorry_empty_artist'

export const EMPTY_RESULTS = [
  {
    id: 0,
    author: EMPTY_ARTIST,
    name: 'empty',
  },
]

export const USER = { name: 'Evgenia Leleo', login: 'Leleo', avatar: '' }

export const ERRORS: ErrorTypes = {
  DEFAULT_ERROR: 'Что-то пошло не так...',
  'Пользователь с таким именем уже существует.': 'Этот логин занят',
  'Пользователь с таким адрес электронной почты уже существует.':
    'Этот e-mail занят',
  'Не найдено активной учетной записи с указанными данными':
    'Неверный e-mail или пароль',
}
