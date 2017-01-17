import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { rollDice } from '../actions/diceRoller';

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
  }
});

@connect(
  state => ({
    dice: state.dice
  }),
  dispatch => bindActionCreators({ rollDice }, dispatch)
)
export default class Home extends Component {
  static propTypes = {
    navigate: PropTypes.func.isRequired,
    dice: PropTypes.any,
  };

  toHistory = () => {
    const { navigate } = this.props;
    navigate({
      type: 'push',
      key: 'history'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.welcome}>
            Roll your dice!
            {this.props.dice.rolls}
          </Text>
        </View>

        <View style={styles.navigation}>
          <View style={styles.navItem}>
            <TouchableHighlight
              style={styles.button} onPress={this.rollDice} underlayColor={'#f0f0f0'}
            >
              <Text style={styles.navText}>Roll</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.navItem}>
            <TouchableHighlight
              style={styles.button} onPress={this.toHistory} underlayColor={'#f0f0f0'}
            >
              <Text style={styles.navText}>History</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}
