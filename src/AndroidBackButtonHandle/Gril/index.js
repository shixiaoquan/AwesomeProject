/*
 * @Author: shixiaoquan
 * @Date: 2018-07-13 00:55:41
 * @Last Modified by: shixiaoquan
 * @Last Modified time: 2018-07-13 01:03:25
 */

import { createStackNavigator } from 'react-navigation';
import Gril from './Gril';
import Detail from './Detail';

const RouteConfig = {
  Gril: { screen: Gril },
  Detail: { screen: Detail },
};

const navigatorConfig = {
  cardStyle: { shadowColor: 'transparent' },
  mode: 'card',
  headerMode: 'none',
};

const GrilStack = createStackNavigator(RouteConfig, navigatorConfig);

export default GrilStack;
