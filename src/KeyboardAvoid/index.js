/*
 * @Author: shixiaoquan
 * @Date: 2018-07-08 13:41:13
 * @Last Modified by: shixiaoquan
 * @Last Modified time: 2018-07-09 00:27:46
 */
import React from 'react';
import { View, Image, KeyboardAvoidingView, TextInput } from 'react-native';

import logo from './logo.png';
import styles from './styles';

const KeyboardAvoid = () => (
  <View
    style={styles.container}
  >
    <Image source={logo} style={styles.logo} />
    <KeyboardAvoidingView
      style={styles.view}
      behavior="padding"
      enabled
    >
      <TextInput
        placeholder="Email"
        style={styles.input}
      />
      <TextInput
        placeholder="Username"
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
      />
      <TextInput
        placeholder="Confirm Password"
        style={styles.input}
      />
    </KeyboardAvoidingView>
  </View>
);

export default KeyboardAvoid;
