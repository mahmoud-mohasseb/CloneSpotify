import React, { useContext } from 'react';
import {
  Text,
  Image,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Song } from '../../types';
import { AppContext } from '../../AppContext';

interface SongListItemProps {
  song: Song;
}

const SongListItem = (props: SongListItemProps) => {
  const { song } = props;

  const { setSongId } = useContext(AppContext);

  const onPlay = () => {
    setSongId(song.preview);
  };

  return (
    <TouchableOpacity onPress={onPlay}>
      <View style={styles.container}>
        <Image
          source={{
            uri:
              song.picture_big ||
              song.album?.cover_big ||
              song?.artist?.picture_big,
          }}
          style={styles.image}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.artist}>{song.artist?.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 15,
  },
  image: {
    width: 75,
    height: 75,
  },
  rightContainer: {
    justifyContent: 'space-around',
    marginLeft: 15,
  },
  title: {
    color: 'white',
    fontSize: 24,
  },
  artist: {
    color: 'lightgray',
    fontSize: 20,
  },
});

export default SongListItem;
