/*
 * @Author: shixiaoquan
 * @Date: 2018-07-08 14:21:15
 * @Last Modified by: shixiaoquan
 * @Last Modified time: 2018-07-09 00:22:16
 */
import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width / 7;

export default StyleSheet.create({
  container: {
    backgroundColor: '#FF0000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    width: window.width - 60,
    backgroundColor: 'blue',
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: window.width - 100,
    backgroundColor: '#fff',
    marginHorizontal: 40,
    marginVertical: 5,
    // paddingVertical: 5,
    // paddingHorizontal: 15,
  },
  logo: {
    height: IMAGE_HEIGHT,
    width: IMAGE_HEIGHT,
  },
});
