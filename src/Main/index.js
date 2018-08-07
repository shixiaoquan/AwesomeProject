/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import uuidv1 from 'uuid/v1';
import PropTypes from 'prop-types';

const data = [
  {
    key: uuidv1(),
    value: 'CustomIconFont',
    routeId: 'CustomIconFont',
  },
  {
    key: uuidv1(),
    value: 'ScrollableHeader',
    routeId: 'ScrollableHeader',
  },
  {
    key: uuidv1(),
    value: 'KeyboardAvoid',
    routeId: 'KeyboardAvoid',
  },
  {
    key: uuidv1(),
    value: 'ExceptionHandle',
    routeId: 'ExceptionHandle',
  },
  {
    key: uuidv1(),
    value: 'AndroidBackButtonHandle',
    routeId: 'AndroidBackButtonHandle',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
  },
  itemText: {
    fontSize: 20,
    padding: 15,
  },
  itemSeparator: {
    height: 1,
    backgroundColor: 'grey',
    marginHorizontal: 10,
  },
});

class Home extends Component {
  renderkeyExtractor = (item, index) => `${item.key}${index}`;

  renderItemSeparatorComponent = () => (<View style={styles.itemSeparator} />);

  renderItem = ({ item }) => {
    const {
      value,
      routeId,
    } = item;
    const { navigation } = this.props;
    return (
      <TouchableOpacity onPress={() => { navigation.navigate(routeId); }}>
        <Text style={styles.itemText}>{value}</Text>
      </TouchableOpacity>
    );
  }

  render = () => (
    <View style={styles.container}>
      <Text style={styles.title}>Demo List</Text>
      <FlatList
        data={data}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        ItemSeparatorComponent={this.renderItemSeparatorComponent}
      />
    </View>
  )
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

Home.navigationOptions = () => ({
  header: null,
});

export default Home;
