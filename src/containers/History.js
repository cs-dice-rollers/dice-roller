import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  roll: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  navItem: {
    flex: 1,
  },
  navText: {
    textAlign: 'center',
    color: '#333333',
  },
  navigation: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#f7f7f7',
    padding: 15,
  },
  listItem: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    borderStyle: 'solid',
  },
});

@connect(
  state => ({
    dice: state.dice,
  }),
)
export default class History extends Component {
  static propTypes = {
    navigate: PropTypes.func.isRequired,
    dice: PropTypes.shape({
      rolls: PropTypes.arrayOf(PropTypes.shape),
    }),
  };

  toHome = () => {
    const { navigate } = this.props;
    navigate({
      type: 'back',
    });
  }

  render() {
    console.log(this.props.dice.rolls);
    const content = this.props.dice.rolls.map(roll => (
      <View key={roll.timestamp} style={styles.listItem}>
        <Text>{roll.dieType} | {roll.roll} | {moment(roll.timestamp).format('h:mm:ss:SS A')}</Text>
      </View>
    ));

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          {content}
        </View>

        <View style={styles.navigation}>
          <View style={styles.navItem}>
            <TouchableHighlight
              style={styles.button} onPress={this.toHome} underlayColor={'#f0f0f0'}
            >
              <Text style={styles.navText}>Roll</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.navItem}>
            <TouchableHighlight
              style={styles.button} underlayColor={'#f0f0f0'}
            >
              <Text style={styles.navText}>History</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}
