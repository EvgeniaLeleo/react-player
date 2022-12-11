import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL_API } from '../../constants';
import { TSong } from '../../types';

export const tracksDataApi = createApi({
  reducerPath: 'cardsDataApi',
  baseQuery: fetchBaseQuery({
    baseUrl: URL_API,
  }),
  endpoints: (builder) => ({
    getTracks: builder.query<TSong[], void>({
      query: () => 'catalog/track/all/',
    }),
  }),
});

export const { useGetTracksQuery } = tracksDataApi;
