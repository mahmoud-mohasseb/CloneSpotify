// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Music } from '../types';

const MusicApiHeader = {
  'x-rapidapi-host': 'https://api.deezer.com',
  'x-rapidapi-key': 'd25445e34f373db8aa4812ecf9a37983',
  // 'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
  // 'x-rapidapi-key': '418a7dfc52mshe553ddac007c86dp143f64jsnd7f78d6cc2e3',
};

const createRequest = (url: any) => ({
  url,
  method: 'GET',
  headers: MusicApiHeader,
});

// Define a service using a base URL and expected endpoints
export const MusicApi = createApi({
  reducerPath: 'MusicApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://deezerdevs-deezer.p.rapidapi.com',
    baseUrl: 'https://api.deezer.com',
  }),
  endpoints: (builder) => ({
    getGenreByName: builder.query<Music, string>({
      query: (name) => createRequest(`/genre/0/${name}`),
    }),
    getRadioByName: builder.query<Music, string>({
      query: (radioname) => createRequest(`/radio/${radioname}`),
    }),
    getAlbumByName: builder.query<Music, string>({
      query: (count) => createRequest(`/album/${count}/tracks`),
    }),
    getRadioGenresByName: builder.query<Music, string>({
      query: (count) => createRequest(`/radio/${count}/tracks`),
    }),
    getAlbumByImage: builder.query<Music, string>({
      query: (count) => createRequest(`/album/${count}`),
    }),
    getArtistByName: builder.query<Music, number>({
      query: (count) => createRequest(`/artist/${count}/top?limit=50`),
    }),
    getPlaylistByName: builder.query<Music, number>({
      query: (number) => createRequest(`/playlist/${number}`),
    }),
    getSearchByName: builder.query<Music, string>({
      query: (name) => createRequest(`/search?q=${name}`),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetGenreByNameQuery,
  useGetRadioGenresByNameQuery,
  useGetRadioByNameQuery,
  useGetAlbumByNameQuery,
  useGetAlbumByImageQuery,
  useGetArtistByNameQuery,
  useGetPlaylistByNameQuery,
  useGetSearchByNameQuery,
} = MusicApi;
