//This file is for both platforms but we'll be developing for android in this one. 

//Import a library to create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

//Render it to the device

AppRegistry.registerComponent('albums', () => App);
