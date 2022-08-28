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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Приложение Music Player музыкальный сервис

#### Работа приложения

-[ ] Регистрация (log in)
-[ ] Возможность залогиниться и разлогиниться (sign up, sign out)
-[ ] Встроенный в приложение плеер:
  -[ ] прослушивание музыки,
  -[ ] постановка на паузу и снятие с нее,
  -[ ] перемотка,
  -[ ] повтор трека,
  -[ ] shuffle плейлиста
  -[ ] статистика, которая отображает прогресс работы приложения (время проигрывания трека/время, оставшееся до конца)
-[ ] Функция караоке
-[x] Витрина с доступными треками
-[ ] Добавление трека в избранное: зарегистрированные пользователи могут ставить лайки на песни, которые сохраняются в отдельную вкладку "Коллекция"
-[ ] Сортировка и фильтрация музыки (по жанру, годам, артистам)
-[ ] Поиск треков с фильтрацией по названию
-[ ] Выделение треков и возможность их перемещения (dnd)
-[ ] Текущая песня и текущий плейлист сохраняются. После повторного входа на страницу можно продолжить прослушивание песни, проигрывавшейся перед выходом.
-[ ] Список подборок/альбомов (хиты недели, hot100 и т.п.)
-[ ] В каждой подборке отображается список треков, которые в нее входят
-[x] Страница профиля пользователя с возможностью изменить настройки/кастомизировать приложение/разлогиниться

#### UI

-[ ] Есть возможность управления приложением/игрой с клавиатуры, наличие hot keys
-[x] Есть возможность переключения нескольких языков
-[ ] Есть модальный диалог
-[x] Реализация routing (без перезагрузки страницы приложения)
-[x] Возможность кастомизации приложения, настроек пользователя (выбор цвета фона, кнопок, текста и анимации) пользователем
-[ ] Реализация анимации при проигрывании музыки, для создания которой используются ключевые кадры или svg-анимация
-[x] Приложение выполнено в едином стиле
-[ ] Приложение работает на телефоне/планшете/PC

#### Технический стек приложения

-[ ] Работа с Audio API
-[ ] Реализация Unit тестов (фреймворк Jest)
-[ ] Использование webpack
-[ ] Сохранение и загрузка данных пользователя и информации о сохраненных коллекциях с использованием Local storage
-[x] Использование React + Redux(thunk), React Router DOM, MaterialUI, TypeScript
-[ ] Использование MongoDB
