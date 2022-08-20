import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const SearchBar = ({placeholder, callback, value, style}) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={callback}
      style={[styles.inputStyle, style]}
    />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    borderRadius: 8,
    padding: 8,
    fontSize: 18,
    color: 'black',
    backgroundColor: '#B8BBBB',
  },
});

export default SearchBar;
