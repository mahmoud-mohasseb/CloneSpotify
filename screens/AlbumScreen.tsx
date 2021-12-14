import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import SongListItem from '../components/SongListItem/SongListItem';
import AlbumHeader from '../components/AlbumHeader/AlbumHeader';
// import albumDetails from '../data/AlbumDetails';
import { AppContext } from '../AppContext';

import {
  useGetAlbumByNameQuery,
  useGetAlbumByImageQuery,
  useGetArtistByNameQuery,
} from '../services/Music';

const AlbumScreen = () => {
  const [album, setAlbum] = useState(null);
  const route = useRoute();

  const tracklistparams = route.params?.tracklistId;
  const albumgenreIdparams = route.params?.id;

  const { data: albumImage, error } = useGetAlbumByImageQuery(tracklistparams);
  const { data: artistalbum } = useGetArtistByNameQuery(albumgenreIdparams);
  const { data: albumtracks, isFetching } =
    useGetAlbumByNameQuery(tracklistparams);

  // const { setImageId } = useContext(AppContext);

  useEffect(() => {
    // artistalbum?.data?.map((item) => setImageId(() => item?.album?.cover_big));
    setAlbum(() => artistalbum?.data || albumImage);
    // setAlbum(albumImage?.artist);
  }, [artistalbum, albumtracks, albumImage]);

  if (!album) {
    return <Text>Loading...</Text>;
  }
  return (
    <View>
      <FlatList
        data={albumtracks?.data || artistalbum?.data}
        renderItem={({ item }) => <SongListItem song={item} />}
        // keyExtractor={(item) => item.id}
        keyExtractor={(index) => String(index)}
        ListHeaderComponent={() => <AlbumHeader album={album} />}
      />
    </View>
  );
};

export default AlbumScreen;
