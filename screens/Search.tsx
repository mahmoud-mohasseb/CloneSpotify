import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  View,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import {
  useGetSearchByNameQuery,
  useGetArtistByNameQuery,
} from '../services/Music';

const Search = () => {
  const [text, onChangeText] = useState<string>('Search...');
  const [Searchalbums, setSearchalbums] = useState<never[]>([]);
  const [tracklist, settracklist] = useState<string>('');

  // fetched data
  const { data: search, isFetching } = useGetSearchByNameQuery(text);
  const { data: aritstid, error } = useGetArtistByNameQuery(tracklist);

  // navigation
  const navigation = useNavigation();

  useEffect(() => {
    setSearchalbums(search?.data);
  }, [search, aritstid, tracklist]);

  const Handleview = () => (
    <View>
      <FlatList
        data={Searchalbums}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={index}
            style={{ marginLeft: 10 }}
            onPress={() => (
              settracklist(() => item.album.id),
              navigation.navigate('AlbumScreen', {
                tracklistId: tracklist,
              })
            )}>
            <Image
              source={{ uri: item.album.cover_big }}
              style={{ width: 350, height: 220, borderRadius: 40 }}
            />
            <Text
              style={{
                fontFamily: 'space-mono',
                fontSize: 20,
                color: 'white',
                textAlign: 'center',
              }}>
              {item.album.title}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.album.id}
        showsHorizontalScrollIndicator={false}
      />
      {/* <ScrollView>
        {Searchalbums?.map((item, id, album) => (
          <TouchableOpacity
            key={item}
            style={{ marginLeft: 10 }}
            onPress={() => (
              settracklist(item.album.id),
              navigation.navigate('AlbumScreen', {
                tracklistId: tracklist,
              })
            )}>
            <Text
              key={album}
              style={{
                fontFamily: 'space-mono',
                fontSize: 20,
                color: 'white',
                textAlign: 'center',
              }}>
              {item.album.title}
            </Text>
            <Image
              key={id}
              source={{ uri: item.album.cover_big }}
              style={{ width: 350, height: 220, borderRadius: 40 }}
            />
          </TouchableOpacity>
        ))}
      </ScrollView> */}
    </View>
  );

  return (
    <SafeAreaView>
      <Searchbar
        style={styles.input}
        placeholder='Search'
        onChangeText={onChangeText}
        value={text}
      />
      <Handleview />
      {/* down code here  */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Search;
