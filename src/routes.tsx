import { Routes, Route } from 'react-router-dom';

import { TEXT } from './constants';
import { useAppSelector } from './hook';
import { Login } from './pages/Login/Login';
import { Main } from './pages/Main/Main';
import { Register } from './pages/Register/Register';

export const AppRoutes = () => {
  const lang = useAppSelector((state) => state.language.lang);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/main"
        element={<Main header={TEXT.header.tracks[lang]} />}
      />
      <Route
        path="/dance"
        element={<Main header={TEXT.albums.dance[lang]} />}
      />
      <Route
        path="/mytracks"
        element={<Main header={TEXT.menu.mytracks[lang]} />}
      />
      <Route
        path="/profile"
        element={<Main header={TEXT.menu.profile[lang]} />}
      />
      <Route
        path="/random"
        element={<Main header={TEXT.albums.dayplaylist[lang]} />}
      />
    </Routes>
  );
};
