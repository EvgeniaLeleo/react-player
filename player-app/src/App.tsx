import React from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { Main } from './pages/Main/Main';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/main" element={<Main header={'Треки'} />}></Route>
        <Route
          path="/hits"
          element={<Main header={'100 танцевальных хитов'} />}
        ></Route>
        <Route path="/indie" element={<Main header={'Инди заряд'} />}></Route>
        <Route path="/mytracks" element={<Main header={'Мои треки'} />}></Route>
        <Route
          path="/dayplaylist"
          element={<Main header={'Плейлист дня'} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
