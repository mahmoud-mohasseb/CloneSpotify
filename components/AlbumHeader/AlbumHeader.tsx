import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Album } from '../../types';

export type AlbumHeaderProps = {
  album: Album;

  onPress(): void;
};

const AlbumHeader = (props: AlbumHeaderProps) => {
  const { album } = props;

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            album?.[0]?.contributors?.[0]?.picture_big ||
            album.picture_big ||
            album.cover_big,
        }}
        style={styles.image}
      />
      <Text style={styles.name}>{album.artist?.name}</Text>
      <View style={styles.creatorContainer}>
        <Text style={styles.title}>
          By Spotify :{' '}
          {album.title || album?.[0]?.contributors?.[0]?.name || album.name}
        </Text>
        {/* <Text style={styles.rank}>Rank{album.rank}</Text> */}
      </View>
      <TouchableOpacity onPress={() => album.play}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>PLAY</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    margin: 15,
  },
  name: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  creatorContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  title: {
    color: 'lightgray',
    margin: 5,
    fontSize: 20,
  },
  rank: {
    color: 'lightgray',
    margin: 5,
    fontSize: 20,
  },
  button: {
    backgroundColor: '#1CD05D',
    height: 50,
    width: 175,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
export default AlbumHeader;
