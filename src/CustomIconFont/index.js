/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  createIconSetFromFontello,
  createIconSetFromIcoMoon,
} from 'react-native-vector-icons';
import PropTypes from 'prop-types';

import icoMoonConfig from './selection.json';
import fontelloConfig from './config.json';

const IcoMoonIcon = createIconSetFromIcoMoon(icoMoonConfig);

const FontelloIcon = createIconSetFromFontello(fontelloConfig);

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class CustomIconFont extends Component {
  constructor(props) {
    super(props);
    console.log('ss');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          IcoMoonIcon
        </Text>
        <IcoMoonIcon name="camera" size={40} />
        <IcoMoonIcon name="pacman" size={40} />
        <Text style={styles.welcome}>
          FontelloIcon
        </Text>
        <FontelloIcon name="emo-devil" size={40} />
        <FontelloIcon name="emo-grin" size={40} />
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

CustomIconFont.navigationOptions = () => ({
  headerTitle: 'CustomIconFont',
});

CustomIconFont.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
    goBack: PropTypes.func,
    navigate: PropTypes.func,
    setParams: PropTypes.func,
    state: PropTypes.shape({
      key: PropTypes.string,
      routeName: PropTypes.string,
      params: PropTypes.object,
    }),
    addListener: PropTypes.func,
  }).isRequired,
};

export default CustomIconFont;
