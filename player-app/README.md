# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Приложение Music Player музыкальный сервис

#### Работа приложения

- [ ] Регистрация (log in)
- [ ] Возможность залогиниться и разлогиниться (sign up, sign out)
- [ ] Встроенный в приложение плеер:
  - [x] прослушивание музыки,
  - [x] постановка на паузу и снятие с нее,
  - [x] перемотка,
  - [x] повтор трека,
  - [ ] shuffle плейлиста
  - [ ] статистика, которая отображает прогресс работы приложения (время проигрывания трека/время, оставшееся до конца)
- [ ] Функция караоке
- [x] Витрина с доступными треками
- [ ] Добавление трека в избранное: зарегистрированные пользователи могут ставить лайки на песни, которые сохраняются в отдельную вкладку "Мои треки"
- [ ] Сортировка и фильтрация музыки (по жанру, годам, артистам)
- [ ] Поиск треков с фильтрацией по названию
- [x] Выделение треков и возможность их перемещения (dnd)
- [x] Текущий плейлист сохраняется.
- [x] Текущая песня сохраняются. После повторного входа на страницу можно продолжить прослушивание песни, проигрывавшейся перед выходом.
- [ ] Список подборок/альбомов (хиты недели, hot100 и т.п.)
- [ ] В каждой подборке отображается список треков, которые в нее входят
- [x] Страница профиля пользователя с возможностью изменить настройки/кастомизировать приложение/разлогиниться

#### UI

- [x] Есть возможность управления приложением/игрой с клавиатуры, наличие hot keys:
  - [x] Управление плеером (когда на нем находится фокус)
    - [x] Пробел Play/Pause
    - [x] ← Перемотка назад
    - [x] → Перемотка вперед
    - [x] ↑ Увеличить громкость
    - [x] ↓ Уменьшить громкость
    - [x] L Переключение loop
    - [x] M Выключить/включить звук
- [x] Есть возможность переключения нескольких языков
- [ ] Есть модальный диалог
- [x] Реализация routing (без перезагрузки страницы приложения)
- [x] Возможность кастомизации приложения пользователем:
  - [x] Выбор цвета текста
  - [x] Выбор цвета фона
  - [x] Выбор цвета кнопок и оформления
  - [x] Выбор одного из трех языков (русский, английский, белорусский)
- [ ] Реализация анимации при проигрывании музыки, для создания которой используются ключевые кадры или svg-анимация
- [x] Приложение выполнено в едином стиле
- [ ] Приложение работает на телефоне/планшете/PC

#### Технический стек приложения

- [x] Работа с Audio API
- [ ] Реализация Unit тестов (фреймворк Jest)
- [ ] Сохранение и загрузка данных с использованием Local storage:
  - [ ] информации об избранных треках
  - [x] порядок треков в плейлисте
  - [x] сохранение текущей песни
  - [x] При нажатии на кнопку "Выход" данные из LocalStorage стираются
  - [ ] При повторном входе того же пользователя настройки цвета, языка и избранные треки восстанавливаются с использованием бекенда
- [x] Использование React + Redux
- [x] Использование React Router DOM
- [x] Использование MaterialUI
- [x] Использование react-DnD
- [x] Использование TypeScript
- [x] Использование MongoDB
