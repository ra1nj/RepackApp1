import {Picker} from '@react-native-picker/picker';
import {useState} from 'react';
import {View} from 'react-native';

export const PickerTest = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View style={{height: 300, width: 300}}>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
};
