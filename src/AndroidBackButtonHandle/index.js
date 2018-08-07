/*
 * @Author: Terry Zhang
 * @Date: 2018-06-28 11:34:03
 * @Last modified by:   Boyce
 * @Last modified time: 2018-07-06 13:36:58
 */
import { createBottomTabNavigator } from 'react-navigation';
import Home from './Home';
import Boy from './Boy';
import Gril from './Gril';
import Me from './Me';

const RouteConfig = {
  Home: { screen: Home },
  Boy: { screen: Boy },
  Gril: { screen: Gril },
  Me: { screen: Me },
};

const navigatorConfig = {
  tabBarOptions: {
    style: {
      backgroundColor: '#FFF',
      shadowOpacity: 0.2,
      shadowRadius: 2,
      shadowColor: '#999',
      shadowOffset: { width: 0, height: -2 },
      elevation: 2,
    },
    labelStyle: {
      fontSize: 10,
      color: 'grey',
    },
  },
};

const TabStack = createBottomTabNavigator(RouteConfig, navigatorConfig);

TabStack.navigationOptions = {
  header: null,
};

export default TabStack;
