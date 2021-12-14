import React, { useState, useEffect, FC } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import AlbumCategory from '../components/AlbumCategory/AlbumCategory';

import {
  useGetGenreByNameQuery,
  useGetRadioByNameQuery,
} from '../services/Music';

const HomeScreen = () => {
  const [categories, setCategories] = useState([]);
  const [categoriesradios, setCategoriesradios] = useState([]);
  const [radiogenres, setradiogenres] = useState([]);
  const [radiotop, setradiotop] = useState([]);

  // hooks RTK query
  const { data: genre } = useGetGenreByNameQuery('artists');
  const { data: genreradios } = useGetGenreByNameQuery('radios');
  const { data: radio } = useGetRadioByNameQuery('top');
  const { data: radiogenresname } = useGetRadioByNameQuery('genres');

  // navigation ⛽️
  // const navigation = useNavigation();

  useEffect(() => {
    setCategoriesradios(genreradios?.data);
    setCategories(genre?.data);
    setradiogenres(radiogenresname?.data);
    setradiotop(radio?.data);
  }, [genre, radio, genreradios, radiogenresname, categories]);

  return (
    <ScrollView>
      <AlbumCategory title='Genres' albums={categories} />
      <AlbumCategory title='Genres Radios' albums={categoriesradios} />
      <AlbumCategory title='Radio Genres' albums={radiogenres} />
      <AlbumCategory title='Radio Top' albums={radiotop} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
export default HomeScreen;
