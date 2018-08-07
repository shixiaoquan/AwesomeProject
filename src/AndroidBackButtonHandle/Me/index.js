/*
 * @Author: shixiaoquan
 * @Date: 2018-07-13 00:55:41
 * @Last Modified by: shixiaoquan
 * @Last Modified time: 2018-07-13 01:14:21
 */

import { createStackNavigator } from 'react-navigation';
import Me from './Me';
import Detail from './Detail';

const RouteConfig = {
  Me: { screen: Me },
  Detail: { screen: Detail },
};

const navigatorConfig = {
  cardStyle: { shadowColor: 'transparent' },
  mode: 'card',
  headerMode: 'none',
};

const MeStack = createStackNavigator(RouteConfig, navigatorConfig);

export default MeStack;
