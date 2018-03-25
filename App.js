import React, { Component } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/Store/store';
import RootNavigation from './src/Navigation';

export default Root = (props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text> LOLOLOL </Text>}
        persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
}
