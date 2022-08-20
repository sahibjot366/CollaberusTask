import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const CustomButton = ({
  title,
  callback,
  containerStyle,
  titleStyle,
  disabled,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={callback}
      style={[styles.defaultStyle, containerStyle]}>
      <Text style={[styles.defaultTitleStyle, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    borderRadius: 24,
    padding: 12,
    backgroundColor: '#F70644',
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultTitleStyle: {
    fontSize: 18,
    color: 'white',
  },
});

export default CustomButton;
