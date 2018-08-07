/*
 * @Author: shixiaoquan
 * @Date: 2018-07-12 22:19:40
 * @Last Modified by: shixiaoquan
 * @Last Modified time: 2018-07-12 22:25:31
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ExceptionHandle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstLoad: true,
    };
  }
  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({ firstLoad: false });
    }, 3000);
  }
  render() {
    const { firstLoad } = this.state;
    return (
      <View>
        {
          firstLoad ?
            <Text>firstLoad</Text>
          :
            <Text>Loaded</Text>
        }
      </View>
    );
  }
}

export default ExceptionHandle;

