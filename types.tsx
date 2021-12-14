export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type UseQueryStateDefaultResult = {
  useGetPlaylistByNameQuery: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
  AlbumScreen: undefined;
};
export type TabThreeParamList = {
  TabThreeScreen: undefined;
  Search: undefined;
};
export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type Album = {
  onPress: () => void;
  item: never;
  [0]: any;
  cover_big: string;
  radios: string;
  picture_big: any;
  artist: any;
  title: string;
  play: boolean;
  rank: number;
  name: string;
  id: any;
  imageUri: string;
  artistHeadline: string;
};

export type Song = {
  album: any;
  id: string;
  imageUri: string;
  title: string;
  artist: string;
  name: string;
  preview: any;
};
export type Music = {
  genre: string;
  name: string;
  count: number;
};
