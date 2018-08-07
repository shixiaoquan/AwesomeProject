/*
 * @Author: shixiaoquan
 * @Date: 2018-07-13 00:46:30
 * @Last Modified by: shixiaoquan
 * @Last Modified time: 2018-07-13 01:15:32
 */
import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class Home extends Component {
  onPress = () => {
    const { navigation } = this.props;
    navigation.navigate('Detail');
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> Home </Text>
        <TouchableOpacity onPress={this.onPress} style={{ padding: 30 }}>
          <Text>Go to Dtail</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
Home.propTypes = {
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

