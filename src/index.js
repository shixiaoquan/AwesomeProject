/*
 * @Author: shixiaoquan
 * @Date: 2018-07-08 13:39:34
 * @Last Modified by: shixiaoquan
 * @Last Modified time: 2018-07-13 01:09:15
 */
import { Animated, Easing } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Main from './Main';
import CustomIconFont from './CustomIconFont';
import ScrollableHeader from './ScrollableHeader';
import KeyboardAvoid from './KeyboardAvoid';
import ExceptionHandle from './ExceptionHandle';
import AndroidBackButtonHandle from './AndroidBackButtonHandle';

const RouteConfigs = {
  Main: { screen: Main },
  CustomIconFont: { screen: CustomIconFont },
  ScrollableHeader: { screen: ScrollableHeader },
  KeyboardAvoid: { screen: KeyboardAvoid },
  ExceptionHandle: { screen: ExceptionHandle },
  AndroidBackButtonHandle: { screen: AndroidBackButtonHandle },
};
const StackNavigatorConfig = {
  mode: 'card',
  navigationOptions: {
    gesturesEnabled: false,
  },
  transitionConfig: () => ({
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
    },
    screenInterpolator: (sceneProps) => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;

      const height = layout.initHeight;
      const translateY = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [height, 0, 0],
      });

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1],
      });

      return { opacity, transform: [{ translateY }] };
    },
  }),
};

const App = createStackNavigator(RouteConfigs, StackNavigatorConfig);

export default App;

