/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {HomeScreen} from './src/HomeScreen';
import {Provider} from 'react-redux';
import {store} from '~/redux/store';
import {AppDataSource} from '~/storage/db/datasource';
import 'reflect-metadata';

const bootstrap = async () => {
  await AppDataSource.initialize();
};

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    bootstrap();
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaView>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{height: '100%'}}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>{'This is App 1'}</Text>
            <HomeScreen />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
