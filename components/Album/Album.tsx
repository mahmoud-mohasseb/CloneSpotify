import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Album } from '../../types';
import { useNavigation } from '@react-navigation/native';

export type AlbumProps = {
  album: Album;
  onPress: () => void;
};
const AlbumComponent = (props: AlbumProps) => {
  const { album } = props;
  const navigation = useNavigation();

  // const { setImageId } = useContext(AppContext);

  const onpress = () => {
    props.id;
    navigation.navigate('AlbumScreen', { id: props.album.id });
  };

  return (
    <TouchableOpacity onPress={onpress}>
      <View style={styles.container}>
        <Image
          source={{
            uri:
              props.album.picture_big || props.album?.radios?.[0]?.picture_big,
          }}
          style={styles.image}
        />
        <Text style={styles.text}>{props.album.name || props.album.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 155,
    margin: 10,
  },
  image: {
    borderRadius: 10,
    width: 155,
    height: 166,
    margin: 10,
  },
  text: {
    width: 155,
    margin: 10,
    color: 'white',
  },
});

export default AlbumComponent;
