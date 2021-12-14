import React from 'react';

const context = {
  imageId: null,
  songId: null,
  setSongId: (id: number) => {},
  setImageId: (image: string) => {},
};

export const AppContext = React.createContext(context);
