import React from 'react';
import styles from './styles'
import { actions } from '../../actions';
import { CheckBox } from 'native-base';

export default ({ color, selectColor, selectedColor }) => {

  return (
    <CheckBox
      color={color}
      style={styles.checkBox}
      onPress={() => selectColor(color)}
      checked={selectedColor === color}
    />
  )
}