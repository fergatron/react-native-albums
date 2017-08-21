import React from 'react';
import { AppRegistry, View } from 'react-native';

// components
import AlbumList from './src/components/AlbumList';
import Header from './src/components/Header';

const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

AppRegistry.registerComponent('albums', () => App);
