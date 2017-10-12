//This file is for both platforms but we'll be developing for android in this one. 

//Import a library to create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//Create a component
const App = () => (
  <Header headerText={'Albums'} />
);

//Render it to the device

AppRegistry.registerComponent('albums', () => App);
