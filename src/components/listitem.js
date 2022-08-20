import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import Icon from 'react-native-vector-icons/AntDesign';

const ListItem = ({item}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const backgroundColor = toggleCheckBox ? '#C6BDBF' : 'white';
  return (
    <View style={[styles.containerStyle, {backgroundColor}]}>
      <View style={[styles.commonStyle, styles.checkBoxViewStyle]}>
        <CheckBox
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
      </View>
      <View style={[styles.commonStyle, styles.contentStyle]}>
        <Text>
          {item.name} ({item.role})
        </Text>
        <Text>{item.email}</Text>
      </View>
      <View style={[styles.commonStyle, styles.iconsViewStyle]}>
        <Icon name="edit" size={18} color="black" />
        <Icon name="delete" size={18} color="red" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
    marginVertical: 2,
  },
  commonStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  contentStyle: {
    alignItems: 'flex-start',
  },
  iconsViewStyle: {
    alignItems: 'flex-end',
  },
  checkBoxViewStyle: {
    marginLeft: 8,
  },
});

export default ListItem;
