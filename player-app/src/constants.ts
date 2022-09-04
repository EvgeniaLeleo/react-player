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

export const ALBUM_RANDOM = 'dayplaylist';
export const ALBUM_DANCE = 'dance';

export const ALBUMS = {
  [ALBUM_RANDOM]: {
    ru: 'Плейлист дня',
    en: 'Playlist of the day',
    bel: 'Плэйліст дня',
  },
  [ALBUM_DANCE]: {
    ru: 'Танцевальные хиты',
    en: 'Dance hits',
    bel: 'Танцавальныя хіты',
  },
};

export const TEXT = {
  menu: {
    homepage: { ru: 'Главная', en: 'Homepage', bel: 'Галоўны' },
    mytracks: { ru: 'Мои треки', en: 'My tracks', bel: 'Мае трэкі' },
    profile: {
      ru: 'Личный кабинет',
      en: 'Profile',
      bel: 'Профіль карыстальніка',
    }, //Асабісты кабінет
    logout: { ru: 'Выйти', en: 'Logout', bel: 'Выйсці' },
  },
  searchInput: {
    ru: 'Поиск по исполнителю / названию песни',
    en: 'Search by artist or song title',
    bel: 'Пошук па артысту або назве песні',
  },
  header: { tracks: { ru: 'Треки', en: 'Tracks', bel: 'Трэк' } },
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
};

export const EMPTY_ARTIST = 'sorry_empty_artist';

export const EMPTY_RESULTS = [
  {
    _id: 'empty_results',
    artist: EMPTY_ARTIST,
  },
];

////////////////////////// TEMP ///////////////////

// export const tempList = [
//   {
//     _id: '630b66201fbf6ac07322c952',
//     album: 'Highway 61 Revisited',
//     artist: 'Bob Dylan',
//     img: 'https://i.scdn.co/image/ab67616d0000b27341720ef0ae31e10d39e43ca2',
//     rank: 1,
//     title: 'Like a Rolling Stone',
//     url: 'https://drive.google.com/uc?id=1JBVMklPFvwJldKEA8O8SipDuVX6wxIWO\u0026export=download',
//     urlPlay:
//       'https://docs.google.com/uc?export=open\u0026id=1JBVMklPFvwJldKEA8O8SipDuVX6wxIWO',
//     year: '1965',
//     duration: '6:10',
//   },
//   {
//     _id: '630b66871fbf6ac07323f99e',
//     album: 'Out of Our Heads',
//     artist: 'The Rolling Stones',
//     img: 'https://i.scdn.co/image/ab67616d0000b27305c5be85b64eaff732f7cb0b',
//     rank: 2,
//     title: "(I Can't Get No) Satisfaction",
//     url: 'https://drive.google.com/uc?id=1M5QfxXmrf29-uLR590PpLJrfwxy5dxmN\u0026export=download',
//     urlPlay:
//       'https://docs.google.com/uc?export=open\u0026id=1M5QfxXmrf29-uLR590PpLJrfwxy5dxmN',
//     year: '1965',
//     duration: '3:44',
//   },
//   {
//     _id: '630b66b31fbf6ac0732484c5',
//     album: 'Imagine',
//     artist: 'John Lennon',
//     img: 'https://i.scdn.co/image/ab67616d0000b27399581550ef9746ca582bb3cc',
//     rank: 3,
//     title: 'Imagine',
//     url: 'https://drive.google.com/uc?id=1KGRAk5rV5-fwz2xJo6LTanRIfnh3oeSl\u0026export=download',
//     urlPlay:
//       'https://docs.google.com/uc?export=open\u0026id=1KGRAk5rV5-fwz2xJo6LTanRIfnh3oeSl',
//     year: '1971',
//     duration: '3:03',
//     genre: 'indie',
//   },
//   {
//     _id: '630b66de1fbf6ac07324fae8',
//     album: "What's Going On",
//     artist: 'Marvin Gaye',
//     img: 'https://i.scdn.co/image/ab67616d0000b273b36949bee43217351961ffbc',
//     rank: 4,
//     title: "What's Going On",
//     url: 'https://drive.google.com/uc?id=1ubmf-JxEZcKmMUtAj5dUtY75RXBM27J6\u0026export=download',
//     urlPlay:
//       'https://docs.google.com/uc?export=open\u0026id=1ubmf-JxEZcKmMUtAj5dUtY75RXBM27J6',
//     year: '1971',
//     duration: '3:58',
//   },
//   {
//     _id: '630b66f21fbf6ac073253d0d',
//     album: 'I Never Loved a Man the Way I Love You',
//     artist: 'Aretha Franklin',
//     img: 'https://i.scdn.co/image/ab67616d0000b2736aa9314b7ddfbd8f036ba3ac',
//     rank: 5,
//     title: 'Respect',
//     url: 'https://drive.google.com/uc?id=1w4Z0bUFP7xp7lAgCKMjUc0KODscQprq5\u0026export=download',
//     urlPlay:
//       'https://docs.google.com/uc?export=open\u0026id=1w4Z0bUFP7xp7lAgCKMjUc0KODscQprq5',
//     year: '1967',
//     duration: '2:29',
//   },
// ];

export const USER = { name: 'Evgenia Leleo', login: 'Leleo', avatar: '' };

// export const DATA: TData = {
//   count: 29,
//   next: null,
//   previous: 'http://84.201.139.95:8000/catalog/track/all/?page=2',
//   results: [
//     {
//       id: 28,
//       name: 'Carol Of The Bells',
//       author: 'Alexander Nakarada',
//       release_date: '2022-04-16',
//       genre: 'Рок музыка',
//       duration_in_seconds: 205,
//       album: 'Carol Of The Bells',
//       logo: null,
//       track_file:
//         'http://84.201.139.95:8000/django_media/music_files/Alexander_Nakarada_-_Carol_Of_The_Bells.mp3',
//       stared_user: [],
//     },
//     {
//       id: 29,
//       name: 'Feel Good Rock',
//       author: 'Audionautix',
//       release_date: '2020-02-12',
//       genre: 'Рок музыка',
//       duration_in_seconds: 312,
//       album: 'FAST',
//       logo: null,
//       track_file:
//         'http://84.201.139.95:8000/django_media/music_files/Audionautix_-_Feel_Good_Rock.mp3',
//       stared_user: [],
//     },
//     {
//       id: 30,
//       name: 'The World Waltz',
//       author: 'Kevin Macleodburn',
//       release_date: null,
//       genre: 'Рок музыка',
//       duration_in_seconds: 305,
//       album: 'The Waltzer',
//       logo: null,
//       track_file:
//         'http://84.201.139.95:8000/django_media/music_files/Kevin_Macleodburn_-_The_World_Waltz.mp3',
//       stared_user: [],
//     },
// {
//   id: 31,
//   name: '5 cents back',
//   author: 'MED',
//   release_date: '2005-03-03',
//   genre: 'Рок музыка',
//   duration_in_seconds: 345,
//   album: '5 cents back',
//   logo: null,
//   track_file:
//     'http://84.201.139.95:8000/django_media/music_files/MED_-_5_Cents_Back.mp3',
//   stared_user: [],
// },
// {
//   id: 32,
//   name: 'Essence2',
//   author: 'MED',
//   release_date: '1920-05-03',
//   genre: 'Электронная музыка',
//   duration_in_seconds: 205,
//   album: 'Essence2',
//   logo: null,
//   track_file:
//     'http://84.201.139.95:8000/django_media/music_files/MED_-_Essence2.mp3',
//   stared_user: [],
// },
// {
//   id: 33,
//   name: 'Classical Metal Workout',
//   author: '-',
//   release_date: '1991-09-06',
//   genre: 'Рок музыка',
//   duration_in_seconds: 246,
//   album: 'Workout',
//   logo: null,
//   track_file:
//     'http://84.201.139.95:8000/django_media/music_files/Musiclfiles_-_Classical_Metal_Workout.mp3',
//   stared_user: [],
// },
//     {
//       id: 34,
//       name: 'Adrenelynne',
//       author: 'Tim Kulig',
//       release_date: '2007-05-14',
//       genre: 'Рок музыка',
//       duration_in_seconds: 285,
//       album: 'Adrenelynne',
//       logo: null,
//       track_file:
//         'http://84.201.139.95:8000/django_media/music_files/Tim_Kulig_-_Adrenelynne.mp3',
//       stared_user: [],
//     },
//     {
//       id: 35,
//       name: 'Hard Metal Intro',
//       author: 'Winniethemoog',
//       release_date: '1991-09-06',
//       genre: 'Рок музыка',
//       duration_in_seconds: 255,
//       album: 'Hard Metal',
//       logo: null,
//       track_file:
//         'http://84.201.139.95:8000/django_media/music_files/Winniethemoog__-_Hard_Metal_Intro.mp3',
//       stared_user: [],
//     },
//     {
//       id: 36,
//       name: 'Action Sport Breakbeat',
//       author: 'Winniethemoog',
//       release_date: '1991-09-07',
//       genre: 'Рок музыка',
//       duration_in_seconds: 234,
//       album: 'Workout',
//       logo: null,
//       track_file:
//         'http://84.201.139.95:8000/django_media/music_files/Winniethemoog_-_Action_Sport_Breakbeat.mp3',
//       stared_user: [],
//     },
//   ],
// };

// export const TRACKS = DATA.results;

// export const TRACK = DATA.results[0];

// export const DATA: TData = {
//   count: 29,
//   next: 'http://84.201.139.95:8000/catalog/track/all/?page=2',
//   previous: null,
//   results: [
//     {
//       id: 8,
//       name: 'Chase',
//       author: 'Alexander Nakarada',
//       release_date: '2005-06-11',
//       genre: 'Классическая музыка',
//       duration_in_seconds: 205,
//       album: 'Chase',
//       logo: null,
//       track_file:
//         'http://84.201.139.95:8000/django_media/music_files/Alexander_Nakarada_-_Chase.mp3',
//       stared_user: [],
//     },
//     {
//       id: 9,
//       name: 'Open Sea epic',
//       author: 'Frank Schroter',
//       release_date: '2019-06-12',
//       genre: 'Классическая музыка',
//       duration_in_seconds: 165,
//       album: 'Open Sea epic',
//       logo: null,
//       track_file:
//         'http://84.201.139.95:8000/django_media/music_files/Frank_Schroter_-_Open_Sea_epic.mp3',
//       stared_user: [],
//     },
//     {
//       id: 10,
//       name: 'Sneaky Snitch',
//       author: 'Kevin Macleod',
//       release_date: '2022-04-16',
//       genre: 'Классическая музыка',
//       duration_in_seconds: 305,
//       album: 'Sneaky Snitch',
//       logo: null,
//       track_file:
//         'http://84.201.139.95:8000/django_media/music_files/Kevin_Macleod_-_Sneaky_Snitch.mp3',
//       stared_user: [],
//     },
//     {
//       id: 11,
//       name: 'Secret Garden',
//       author: 'Mixkit',
//       release_date: '1972-06-06',
//       genre: 'Классическая музыка',
//       duration_in_seconds: 324,
//       album: 'Secret Garden',
//       logo: null,
//       track_file:
//         'http://84.201.139.95:8000/django_media/music_files/Mixkit_-_Secret_Garden.mp3',
//       stared_user: [],
//     },
//     {
//       id: 12,
//       name: 'A journey of successfull winners',
//       author: '-',
//       release_date: '1985-02-02',
//       genre: 'Классическая музыка',
//       duration_in_seconds: 255,
//       album: '-',
//       logo: null,
//       track_file:
//         'http://84.201.139.95:8000/django_media/music_files/Musiclfiles_-_A_Journey_For_Successful_Winners.mp3',
//       stared_user: [],
//     },
//     {
//       id: 13,
//       name: 'Epic Heroic Conquest',
//       author: '-',
//       release_date: '1962-01-15',
//       genre: 'Классическая музыка',
//       duration_in_seconds: 200,
//       album: 'Epic Heroic Conquest',
//       logo: null,
//       track_file:
//         'http://84.201.139.95:8000/django_media/music_files/Musiclfiles_-_Epic_Heroic_Conquest.mp3',
//       stared_user: [],
//     },
//     {
//       id: 14,
//       name: 'The March OF The Final Battle',
//       author: '-',
//       release_date: '2011-11-02',
//       genre: 'Классическая музыка',
//       duration_in_seconds: 206,
//       album: 'The March OF The Final Battle',
//       logo: null,
//       track_file:
//         'http://84.201.139.95:8000/django_media/music_files/musiclfiles_-_The_March_Of_The_Final_Battle.mp3',
//       stared_user: [],
//     },
//     {
//       id: 15,
//       name: 'True Summer',
//       author: '-',
//       release_date: '2012-06-01',
//       genre: 'Классическая музыка',
//       duration_in_seconds: 253,
//       album: 'True Summer',
//       logo: null,
//       track_file:
//         'http://84.201.139.95:8000/django_media/music_files/Musiclfiles_-_True_Summer.mp3',
//       stared_user: [],
//     },
//     {
//       id: 16,
//       name: 'Background Sensible',
//       author: 'Waltz Piano',
//       release_date: '2003-05-12',
//       genre: 'Классическая музыка',
//       duration_in_seconds: 135,
//       album: 'Background Sensible',
//       logo: null,
//       track_file:
//         'http://84.201.139.95:8000/django_media/music_files/Waltz_Piano_-_Background_Sensible.mp3',
//       stared_user: [],
//     },
//     {
//       id: 17,
//       name: 'Cinematic',
//       author: 'Winniethemoog',
//       release_date: '2004-10-01',
//       genre: 'Классическая музыка',
//       duration_in_seconds: 206,
//       album: 'Cinematic',
//       logo: null,
//       track_file:
//         'http://84.201.139.95:8000/django_media/music_files/Winniethemoog_-_Cinematic.mp3',
//       stared_user: [],
//     },
//   ],
// };

// export const DONE = '33%';

// export const HEADER: THeader = 'Треки';

// export const HEADER: THeader = 'Плейлист дня';
// export const HEADER: THeader = '100 танцевальных хитов';
// export const HEADER: THeader = 'Инди заряд';
// export const HEADER: THeader = 'Мои треки';

// const items2 = [
//   'Раз',
//   'Два',
//   'Три',
//   'Четыре',
//   '2022',
//   '2021',
//   '2020',
//   '2019',
//   '2018',
//   'raegargts',
//   'aergerstg',
//   'qweqe',
//   'wefawgr',
//   'EFAWFWR',
//   'Пять',
//   'Раз',
//   'Два',
//   'Три',
//   'Четыре',
//   'Пять',
// ];

// "dependencies": {
//   "nouislider": "^15.6.0"
// }
