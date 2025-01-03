import {View, Text, Button} from 'react-native';
import {InAppBrowser} from 'react-native-inappbrowser-reborn';

export const HomeScreen = () => {
  const openBrowser = async () => {
    await InAppBrowser.open('https://bing.com');
  };
  return (
    <View>
      <Button title={'Open in-app browser'} onPress={openBrowser} />
    </View>
  );
};
