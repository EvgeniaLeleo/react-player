import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './Main.css';
import { FilterButton } from '../../components/FilterButton/FilterButton';

const cnMain = cn('Main');
const cnNavMenu = cn('NavMenu');
const cnSidebar = cn('Sidebar');
const cnCenterblock = cn('Centerblock');
const cnContent = cn('Content');

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
          <button className={cnNavMenu('Burger')}>
            <svg
              className={cnNavMenu('Burger-Icon')}
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 1.49072H0" stroke="currentColor" />
              <path d="M20 6.49072H0" stroke="currentColor" />
              <path d="M20 11.4907H0" stroke="currentColor" />
            </svg>
          </button>
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
        <div className={cnMain('Centerblock')}>
          <input className={cnCenterblock('Input')} placeholder="Поиск"></input>
          <h2 className={cnCenterblock('Title')}>Треки</h2>
          <div className={cnCenterblock('Filters')}>
            <span className={cnCenterblock('Filters-Text')}>Искать по:</span>
            <FilterButton buttonText="исполнителю"></FilterButton>
            <FilterButton buttonText="году выпуска"></FilterButton>
            <FilterButton buttonText="жанру"></FilterButton>
          </div>
          <div className={cnCenterblock('Content')}>
            <div className={cnContent('Header')}>
              <span className={cnContent('Track')}>ТРЕК</span>
              <span className={cnContent('Singer')}>ИСПОЛНИТЕЛЬ</span>
              <span className={cnContent('Album')}>АЛЬБОМ</span>
              <span className={cnContent('Time')}>
                <img src="./icons/watch.svg" alt="duration" />
              </span>
            </div>
          </div>
        </div>
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
