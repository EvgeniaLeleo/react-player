import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './Sidebar.css';
import { USER } from '../../constants';
import { NavLink } from 'react-router-dom';

const cnSidebar = cn('Sidebar');

export type SidebarProps = {
  isVisible: boolean;
};

export const Sidebar: FC<SidebarProps> = ({ isVisible }) => {
  return (
    <div className={cnSidebar()}>
      <div className={cnSidebar('User')}>
        <div className={cnSidebar('User-Name')}>{USER.name}</div>
        <div className={cnSidebar('User-Avatar')}></div>
      </div>
      <div
        className={cnSidebar('List')}
        style={isVisible ? { display: 'block' } : { display: 'none' }}
      >
        <NavLink to={'/dayplaylist'}>
          <img
            className={cnSidebar('Button')}
            src="./playlist/playlist-day.png"
            alt="Playlist of the day"
          ></img>
        </NavLink>
        <NavLink to={'/hits'}>
          <img
            className={cnSidebar('Button')}
            src="./playlist/playlist-hits.png"
            alt="Playlist of hits"
          ></img>
        </NavLink>
        <NavLink to={'/indie'}>
          <img
            className={cnSidebar('Button')}
            src="./playlist/playlist-indie.png"
            alt="Indie charge"
          ></img>
        </NavLink>
      </div>
    </div>
  );
};
