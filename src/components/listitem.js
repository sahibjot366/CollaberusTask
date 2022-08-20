import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const ListItem = ({item, selectDeselectItem, deleteItem, updateData}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const backgroundColor = toggleCheckBox ? '#9A9999' : 'white';
  const navigation = useNavigation();

  return (
    <View style={[styles.containerStyle, {backgroundColor}]}>
      <View style={[styles.commonStyle, styles.checkBoxViewStyle]}>
        <CheckBox
          value={toggleCheckBox}
          onValueChange={newValue => {
            setToggleCheckBox(newValue);
            selectDeselectItem(item.id, newValue);
          }}
        />
      </View>
      <View style={[styles.commonStyle, styles.contentStyle]}>
        <Text>
          {item.name} ({item.role})
        </Text>
        <Text>{item.email}</Text>
      </View>
      <View style={[styles.commonStyle, styles.iconsViewStyle]}>
        <Icon
          name="edit"
          size={20}
          color="black"
          onPress={() => {
            navigation.navigate('editscreen', {item, updateData});
          }}
          style={styles.iconStyle}
        />
        <Icon
          name="delete"
          size={20}
          color="red"
          onPress={() => {
            deleteItem(item.id);
          }}
        />
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
  iconStyle: {marginBottom: 4},
});

export default ListItem;
