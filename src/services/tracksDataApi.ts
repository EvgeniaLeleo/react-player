import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { URL_API } from '../constants';
import { TCollection, TSong } from '../types';

export const tracksDataApi = createApi({
  reducerPath: 'tracksDataApi',
  baseQuery: fetchBaseQuery({
    baseUrl: URL_API,
  }),
  endpoints: (builder) => ({
    getTracks: builder.query<TSong[], void>({
      query: () => 'catalog/track/all/',
    }),
    getCollection: builder.query<TCollection, number>({
      query: (collectionId) => `catalog/selection/${collectionId}/`,
      //   providesTags: (result) =>
      //     result?.items
      //       ? [
      //           ...result.items.map(({ id }) => ({
      //             type: 'Tracks' as const,
      //             id,
      //           })),
      //           { type: 'Tracks', id: 'LIST' },
      //         ]
      //       : [{ type: 'Tracks', id: 'LIST' }],
    }),
  }),
});

export const { useGetTracksQuery, useGetCollectionQuery } = tracksDataApi;
