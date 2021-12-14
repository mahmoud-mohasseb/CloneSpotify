import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Album } from '../../types';
import AlbumCategories from '../../data/AlbumCategories';
import AlbumComponent from '../Album/Album';

// export properties typescript

export type AlbumCategoryProps = {
  title: string;
  albums: [Album];
};
const AlbumCategory = (props: AlbumCategoryProps) => {
  // const { albums } = props;
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        data={props.albums}
        renderItem={({ item }) => <AlbumComponent album={item} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default AlbumCategory;
