import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import styles from './styles';

const Button = (props) => {

  function getContent() {
    if (props.children) {
      return props.children;
    }
    return <Text style={props.styles.label}>{props.label}</Text>
  }

  return (
    <TouchableHighlight
      underlayColor="#ccc"
      onPress={props.onPress}
      style={[
        props.noDefaultStyles ? '' : styles.button,
        props.styles ? props.styles.button : '']}
    >
      {getContent()}
    </TouchableHighlight>
  );
};

export default Button;