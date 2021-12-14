import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { RootStackParamList } from '../types';

const NotFoundScreen = () => {
  return (
    <View>
      <Text>"NotFound"</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
export default NotFoundScreen;
