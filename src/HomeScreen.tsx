import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {InAppBrowser} from 'react-native-inappbrowser-reborn';
import {useState} from 'react';
import {
  NestableDraggableFlatList,
  NestableScrollContainer,
  RenderItemParams,
  ScaleDecorator,
} from 'react-native-draggable-flatlist';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  rowItem: {
    height: 40,
    width: 400,
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 12,
  },
});
const SortableListTest = () => {
  const tmpData: any[] = [
    {txt: '1. This is a test'},
    {txt: '2. This is a test'},
    {txt: '3. This is a test'},
    {txt: '4. This is a test'},
    {txt: '5. This is a test'},
  ];
  const [dataSource, setDataSource] = useState<any[]>(tmpData);

  const renderItem = ({item, drag, isActive}: RenderItemParams<any>) => {
    return (
      <ScaleDecorator>
        <TouchableOpacity
          onLongPress={drag}
          disabled={isActive}
          style={[
            styles.rowItem,
            {
              backgroundColor: isActive ? '#DDD' : '#FFF',
            },
          ]}>
          <Text style={styles.text}>{item.txt}</Text>
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };
  return (
    <NestableScrollContainer style={{gap: 10}}>
      <NestableDraggableFlatList
        data={dataSource}
        renderItem={renderItem}
        keyExtractor={item => item.txt}
        onDragEnd={({data}) => setDataSource(data)}
      />
    </NestableScrollContainer>
  );
};

export const HomeScreen = () => {
  const openBrowser = async () => {
    await InAppBrowser.open('https://bing.com');
  };
  return (
    <View>
      <Button title={'Open in-app browser'} onPress={openBrowser} />
      {/*<SortableListTest />*/}
    </View>
  );
};
