import React from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { Main } from './pages/Main/Main';

import './App.css';
import { TEXT } from './constants';
import { useAppSelector } from './hook';

function App() {
  const lang = useAppSelector((state) => state.language.lang);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/main"
          element={<Main header={TEXT.header.tracks[lang]} />}
        ></Route>
        <Route
          path="/hits"
          element={<Main header={TEXT.albums.hits[lang]} />}
        ></Route>
        <Route
          path="/mytracks"
          element={<Main header={TEXT.menu.mytracks[lang]} />}
        ></Route>
        <Route
          path="/profile"
          element={<Main header={TEXT.menu.profile[lang]} />}
        ></Route>
        <Route
          path="/dayplaylist"
          element={<Main header={TEXT.albums.dayplaylist[lang]} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
