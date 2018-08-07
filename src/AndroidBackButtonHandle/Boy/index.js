/*
 * @Author: shixiaoquan
 * @Date: 2018-07-13 00:55:41
 * @Last Modified by: shixiaoquan
 * @Last Modified time: 2018-07-13 01:04:31
 */

import { createStackNavigator } from 'react-navigation';
import Boy from './Boy';
import Detail from './Detail';

const RouteConfig = {
  Boy: { screen: Boy },
  Detail: { screen: Detail },
};

const navigatorConfig = {
  cardStyle: { shadowColor: 'transparent' },
  mode: 'card',
  headerMode: 'none',
};

const BoyStack = createStackNavigator(RouteConfig, navigatorConfig);

export default BoyStack;
