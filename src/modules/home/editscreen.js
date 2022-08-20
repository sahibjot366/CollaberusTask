import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

import CustomButton from '../../components/custombutton';

const EditScreen = ({route, navigation}) => {
  const {item, updateData} = route.params;
  const [name, setName] = useState(item.name);
  const [email, setEmail] = useState(item.email);
  const [role, setRole] = useState(item.role);
  return (
    <View style={styles.containerStyle}>
      <TextInput
        value={name}
        onChangeText={newVal => setName(newVal)}
        style={styles.inputStyle}
      />
      <TextInput
        value={email}
        onChangeText={newVal => setEmail(newVal)}
        style={styles.inputStyle}
      />
      <TextInput
        value={role}
        onChangeText={newVal => setRole(newVal)}
        style={styles.inputStyle}
      />
      <CustomButton
        title="Save"
        callback={() => {
          if (name && email && role) {
            updateData(item.id, name, email, role);
          }
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginHorizontal: 8,
  },
  inputStyle: {},
});

export default EditScreen;
