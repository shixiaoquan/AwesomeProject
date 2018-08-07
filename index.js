/*
 * @Author: shixiaoquan
 * @Date: 2018-07-08 13:39:52
 * @Last Modified by:   shixiaoquan
 * @Last Modified time: 2018-07-08 13:39:52
 */
import { AppRegistry, YellowBox } from 'react-native';
import App from './src';

// ignore Specific warning of bug caused by react native itself
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
  'Class RCTCxxModule',
]);

AppRegistry.registerComponent('AwesomeProject', () => App);
