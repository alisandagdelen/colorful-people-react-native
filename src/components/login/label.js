import React, { Component } from 'react';
import styles from './styles';
import { Text, } from 'react-native';

const Label = (props) => {
  return (
    <Text
      style={props.styles && props.styles.textLabel ? props.styles.textLabel : styles.textLabel}
    >
      {props.text}
    </Text>
  );
}

export default Label;