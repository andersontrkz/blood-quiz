import React from 'react';
import { Text, TouchableOpacity, type TouchableOpacityProps } from 'react-native';
import styles from './Button.styles';

type ButtonProps = TouchableOpacityProps & {
    label: string;
};  

export default function Button({ label, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, rest.style]}
      {...rest}
    >
      <Text style={styles.buttonText}>{ label }</Text>
    </TouchableOpacity>
  );
}
