import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './Main.css';

const cnMain = cn('Main');
const cnNavMenu = cn('NavMenu');
const cnSidebar = cn('Sidebar');

export const Main: FC<{}> = () => {
  return (
    <div className={cnMain('Wrapper')}>
      <div className={cnMain()}>
        <nav className={cnNavMenu()}>
          <img
            className={cnNavMenu('Logo')}
            src="./skypro-logo-white.svg"
            alt="skypro-logo"
          ></img>
          <button className={cnNavMenu('Burger')}>=</button>
          <ul className={cnNavMenu('List')}>
            <li>
              <button className={cnNavMenu(null, ['List-Button'])}>
                Главное
              </button>
            </li>
            <li>
              <button className={cnNavMenu(null, ['List-Button'])}>
                Мои треки
              </button>
            </li>
            <li>
              <button className={cnNavMenu(null, ['List-Button'])}>
                Выйти
              </button>
            </li>
          </ul>
        </nav>
        <div></div>
        <div className={cnMain('Sidebar')}>
          <div>Ivanov</div>
          <div className={cnSidebar('List')}>
            <button>
              <img
                className={cnSidebar('Button')}
                src="./playlist/playlist-day.png"
                alt="Playlist of the day"
              ></img>
            </button>
            <button>
              <img
                className={cnSidebar('Button')}
                src="./playlist/playlist-hits.png"
                alt="Playlist of hits"
              ></img>
            </button>
            <button>
              <img
                className={cnSidebar('Button')}
                src="./playlist/playlist-indie.png"
                alt="Indie charge"
              ></img>
            </button>
          </div>
        </div>
      </div>
      <div className={cnMain('Player')}></div>
    </div>
  );
};
