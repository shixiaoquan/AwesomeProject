/*
 * @Author: shixiaoquan
 * @Date: 2018-07-13 00:55:41
 * @Last Modified by: shixiaoquan
 * @Last Modified time: 2018-07-13 01:04:20
 */

import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import Detail from './Detail';

const RouteConfig = {
  Home: { screen: Home },
  Detail: { screen: Detail },
};

const navigatorConfig = {
  cardStyle: { shadowColor: 'transparent' },
  mode: 'card',
  headerMode: 'none',
};

const HomeStack = createStackNavigator(RouteConfig, navigatorConfig);

export default HomeStack;
