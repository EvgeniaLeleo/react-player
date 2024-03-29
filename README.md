# Приложение Music Player музыкальный сервис

## Установка

Склонируйте репозиторий и установите зависимости

```sh
cd react-player
npm install
```

Для запуска сервера в development-режиме выполните команду

```sh
npm run start
```

Для запуска тестов выполните команду

```sh
npm run test
```

При необходимости production сборки выполните команду

```sh
npm run build
```

## Структура приложения

- авторизация
- регистрация
- главная страница приложения
- страницы музыкальных подборок
- страница Личного кабинета

## Структура и функционал приложения

### Авторизация

- [x] реализована авторизация и регистрация пользователя
- [x] реализована валидация введенного имени, e-mail и пароля

### Главная страница приложения

- [x] главная страница приложения содержит:
  - [x] меню с навигацией по приложению (меню или иконка меню отображается на всех страницах приложения)
  - [x] строку поиска
  - [x] имя пользователя, введенное при регистрации
  - [x] селект для выбора языка
  - [x] кнопки фильтрации по исполнителю, жанру, году выпуска и кнопка сортировки
  - [x] список возможных треков
  - [x] список музыкальных подборок
  - [x] музыкальный плеер

### Личный кабинет

- [x] отображается меню или иконка меню, при открытии которого открывается навигация по приложению
- [x] для зарегистрированного пользователя отображаются имя и логин
- [x] реализована возможность кастомизации с сохранением настроек в localStorage. Изменения отображаются на каждой странице приложения:
  - [x] выбор цвета текста
  - [x] выбор цвета фона
  - [x] выбор цвета кнопок и оформления
- [x] имеется кнопка для сброса цветовых настроек
- [x] реализована возможность сменить язык приложения (русский, английский, белорусский)
- [x] цветовые настройки и настройки языка сохраняются в localStorage и восстанавливаются после перезагрузки страницы

### Меню

- [x] логотип приложения, при клике по которому пользователь переходит на главную страницу
- [x] кнопка входа на страницу Мои треки
- [x] кнопка входа в Личный кабинет
- [x] кнопка Выход, при нажатии на которую очищаются данные localStorage
- [x] реализована анимация при проигрывании музыки

### Страница музыкальной подборки

- [x] страница содержит:
  - [x] меню с навигацией по приложению
  - [x] строку поиска
  - [x] имя пользователя, введенное при регистрации
  - [x] селект для выбора языка
  - [x] подборка треков из соответствующего альбома
  - [x] список музыкальных подборок
  - [x] музыкальный плеер

### Страница Мои треки

- [x] функция "лайк", для добавления трека на страницу Мои треки
- [x] возможность убирать трек со страницы Мои треки

### Работа приложения

- [x] Пока главная страница с треками прогружается, пользователь видит экран скелетона
- [x] Выделение треков и возможность их перемещения (drag-and-drop)
- [x] Играющая в данный момент песня выделена цветом
- [x] Поиск треков с фильтрацией по названию или имени исполнителя (происходит после введения каждого символа и ищет совпадения в любом из слов названия песни или ее исполнителя)
- [x] Фильтрация музыки
  - [x] по артистам
  - [x] по годам
  - [x] по жанру
- [x] Сортировка песен по годам
  - [x] по возрастанию,
  - [x] по убыванию,
  - [x] по умолчанию
- [x] Приложение работает на телефоне/планшете/PC, реализована адаптивная верстка:
  - [x] 1440px <= width
  - [x] 1200px <= width <= 1439px
  - [x] 768px <= width < 1200px
  - [x] 550px <= width < 768px
  - [x] 320px <= width < 550px

### Встроенный в приложение плеер

- [x] есть возможность прослушивания музыки
- [x] постановка на паузу и снятие с нее
- [x] перемотка вперед/назад
- [x] повтор трека
- [x] shuffle плейлиста
- [x] в плеере отображается название песни и имя исполнителя
- [x] возможность изменения громкости и отключения звука

### Технический стек приложения

- [x] React
- [x] Redux + Redux Toolkit + RTK Query
- [x] React Router DOM, реализация routing
- [x] js-cookie, react-responsive, react-hook-form
- [x] react-DnD
- [x] TypeScript
- [x] [Material UI](https://mui.com/material-ui/getting-started/overview/)
