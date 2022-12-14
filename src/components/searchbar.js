import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const SearchBar = ({placeholder, callback, value, style, onSubmitEditing}) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={callback}
      style={[styles.inputStyle, style]}
      returnKeyType="search"
      onSubmitEditing={onSubmitEditing}
    />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    borderRadius: 8,
    padding: 12,
    fontSize: 18,
    color: 'black',
    backgroundColor: '#B8BBBB',
  },
});

export default SearchBar;
