/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
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
import {store} from './src/redux/store';
import {PickerTest} from './src/PickerTest';
import {SortableListTest} from './src/SortableList';
import {NestableScrollContainer} from 'react-native-draggable-flatlist';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <SafeAreaView>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{height: '100%'}}>
          <NestableScrollContainer
            contentContainerStyle={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>{'This is App 1'}</Text>
            <HomeScreen />
            <SortableListTest />
          </NestableScrollContainer>
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
