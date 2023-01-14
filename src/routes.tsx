import {
  Routes as ReactRoutes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom'
import { FC } from 'react'

import { useLoadCredentialsFromCookies } from './hooks/useLoadCredentialsFromCookies'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { SignupPage } from './pages/SignupPage/SignupPage'
import { TracksPage } from './pages/TracksPage/TracksPage'
import { CollectionPage } from './pages/CollectionPage/CollectionPage'
import { ProfilePage } from './pages/ProfilePage/ProfilePage'
import { MyTracksPage } from './pages/MyTracksPage/MyTracksPage'
import { PageWrapper } from './pages/PageWrapper/PageWrapper'

export const ROUTES = {
  main: '/',
  login: '/login',
  profile: '/profile',
  signup: '/signup',
  tracks: '/tracks',
  mytracks: '/mytracks',
  collection: '/collection',
}

type Props = {
  redirectPath?: string
  isAllowed: boolean
}

const ProtectedRoute: FC<Props> = ({
  redirectPath = ROUTES.login,
  isAllowed,
}) => {
  if (!isAllowed) return <Navigate to={redirectPath} replace={true} />
  return <Outlet />
}

export const AppRoutes = () => {
  const isLoggedIn = useLoadCredentialsFromCookies()

  return (
    <ReactRoutes>
      <Route path={ROUTES.login} element={<LoginPage />} />
      <Route path={ROUTES.signup} element={<SignupPage />} />
      <Route element={<ProtectedRoute isAllowed={isLoggedIn} />}>
        <Route path={'/'} element={<PageWrapper />}>
          <Route path={ROUTES.main} element={<TracksPage />} />
          <Route path={ROUTES.profile} element={<ProfilePage />} />
          <Route path={ROUTES.mytracks} element={<MyTracksPage />} />
          <Route
            path={`${ROUTES.collection}/:id`}
            element={<CollectionPage />}
          />
          <Route path="*" element={<Navigate replace to={ROUTES.main} />} />
        </Route>
      </Route>
    </ReactRoutes>
  )
}
