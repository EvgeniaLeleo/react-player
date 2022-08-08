import React from 'react';
import './App.css';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { Main } from './pages/Main/Main';
import { Popup } from './components/Popup/Popup';

function App() {
  // const items = ['2022', '2021', '2020', '2019', '2018'];
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
  return (
    <>
      <Login></Login>
      <Register></Register>
      <Main></Main>
      {/* <Popup items={items2} rows={1}></Popup> */}
    </>
  );
}

export default App;
