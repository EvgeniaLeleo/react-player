import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { RootState } from '../store'
import {
  Track,
  UserTokens,
  Collection,
  User,
  LoginUser,
  SignupUser,
} from '../types'
import { checkJWTExpTime } from '../utils/checkJWTExpTime'

export const dataApi = createApi({
  reducerPath: 'music-player/api',
  tagTypes: ['Tracks'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://158.160.38.162:8090',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).token.access
      if (token && checkJWTExpTime(token)) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (build) => ({
    getTracks: build.query<Track[], void>({
      query: () => 'catalog/track/all/',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Tracks' as const, id })),
              { type: 'Tracks', id: 'LIST' },
            ]
          : [{ type: 'Tracks', id: 'LIST' }],
    }),
    getTrack: build.query<Track, number>({
      query: (trackId: number) => `catalog/track/${trackId}/`,
    }),
    login: build.mutation<SignupUser, LoginUser>({
      query: (body: LoginUser) => ({
        url: 'user/login/',
        method: 'POST',
        body,
      }),
    }),
    signup: build.mutation({
      query: (body: SignupUser) => ({
        url: 'user/signup/',
        method: 'POST',
        body,
      }),
    }),
    token: build.mutation<UserTokens, LoginUser>({
      query: (body: LoginUser) => ({
        url: 'user/token/',
        method: 'POST',
        body,
      }),
    }),
    refreshUserToken: build.mutation<UserTokens, string>({
      query: (body: string) => ({
        url: 'user/token/refresh/',
        method: 'POST',
        body: { refresh: body },
      }),
    }),
    addTrackToFavorite: build.mutation<void, number>({
      query: (trackId: number) => ({
        url: `catalog/track/${trackId}/favorite/`,
        method: 'POST',
      }),
      invalidatesTags: [{ type: 'Tracks', id: 'LIST' }],
    }),
    removeTrackFromFavorite: build.mutation({
      query: (trackId: number) => ({
        url: `catalog/track/${trackId}/favorite/`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Tracks', id: 'LIST' }],
    }),
    getCollection: build.query<Collection, number>({
      query: (collectionId) => `catalog/selection/${collectionId}/`,
      providesTags: (result) =>
        result?.items
          ? [
              ...result.items.map(({ id }) => ({
                type: 'Tracks' as const,
                id,
              })),
              { type: 'Tracks', id: 'LIST' },
            ]
          : [{ type: 'Tracks', id: 'LIST' }],
    }),
    getCurrentUser: build.query<User, void>({
      query: () => `user/me/`,
    }),
  }),
})

export const {
  useGetTracksQuery,
  useGetTrackQuery,
  useLoginMutation,
  useSignupMutation,
  useTokenMutation,
  useRefreshUserTokenMutation,
  useAddTrackToFavoriteMutation,
  useRemoveTrackFromFavoriteMutation,
  useGetCollectionQuery,
  useGetCurrentUserQuery,
} = dataApi
