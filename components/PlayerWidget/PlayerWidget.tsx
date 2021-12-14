import React, { useContext, useEffect, useState, FC } from 'react';
import { Text, Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
// import { Song } from '../../types';
import { Sound } from 'expo-av/build/Audio/Sound';
import { AppContext } from '../../AppContext';

const PlayerWidget = (source: any) => {
  const [song, setSong] = useState(null);
  const [songimage, setsongimage] = useState(null);
  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [duration, setDuration] = useState<number | null>(null);
  const [position, setPosition] = useState<number | null>(null);
  const [Heart, setHeart] = useState<boolean>(false);
  const { songId, imageId } = useContext(AppContext);

  useEffect(() => {
    setsongimage(imageId);
    setSong(songId);
  }, [songId, imageId]);
  // console.log(songId);

  const onPlaybackStatusUpdate = (status: any) => {
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
  };

  const playCurrentSong = async () => {
    if (sound) {
      await sound.unloadAsync();
    }
    const { sound: newSound } = await Sound.createAsync(
      { uri: songId! },
      { shouldPlay: isPlaying },
      onPlaybackStatusUpdate,
    );

    setSound(newSound);
  };

  useEffect(() => {
    if (song) {
      playCurrentSong();
    }
  }, [song]);

  const onPlayPausePress = async () => {
    if (!sound) {
      return;
    }
    if (isPlaying) {
      await sound.stopAsync();
    } else {
      await sound.playAsync();
    }
  };

  const getProgress = () => {
    if (sound === null || duration === null || position === null) {
      return 0;
    }
    return (position / duration) * 100;
  };

  if (!song) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${getProgress()}%` }]} />
      <View style={styles.row}>
        {/* <Image
          source={{ uri: song.contributors?.[0]?.picture_big }}
          style={styles.image}
        /> */}
        <Image source={{ uri: imageId || source }} style={styles.image} />
        <View style={styles.rightContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.title}>{song.title}</Text>
            <Text style={styles.artist}>{song.artist}</Text>
          </View>

          <View style={styles.iconsContainer}>
            <AntDesign
              name='hearto'
              size={30}
              onPress={() => setHeart(true)}
              color={Heart ? 'red' : 'white'}
            />
            <TouchableOpacity onPress={onPlayPausePress}>
              <FontAwesome
                name={isPlaying ? 'pause' : 'play'}
                size={30}
                color={'white'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 75,
    // bottom: '9%',
    backgroundColor: '#131313',
    width: '100%',
    borderWidth: 2,
    borderColor: 'black',
  },
  progress: {
    height: 3,
    backgroundColor: '#bcbcbc',
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 10,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    justifyContent: 'space-around',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
  artist: {
    color: 'lightgray',
    fontSize: 18,
  },
});
export default PlayerWidget;
