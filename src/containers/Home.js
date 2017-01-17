import React, { Component, PropTypes } from 'react';
import RNShakeEvent from 'react-native-shake-event';
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
});

@connect(
  state => ({
    dice: state.dice,
  }),
  dispatch => bindActionCreators({ rollDice }, dispatch),
)
export default class Home extends Component {
  static propTypes = {
    navigate: PropTypes.func.isRequired,
    dice: PropTypes.shape({
      rolling: PropTypes.bool.isRequired,
      rolls: PropTypes.arrayOf(PropTypes.shape),
    }),
    rollDice: PropTypes.func.isRequired,
  };

  componentWillMount() {
    RNShakeEvent.addEventListener('shake', () => {
      this.rollDice();
    });
  }

  componentWillUnmount() {
    RNShakeEvent.removeEventListener('shake');
  }

  toHistory = () => {
    const { navigate } = this.props;
    navigate({
      type: 'push',
      key: 'history',
    });
  }

  rollDice = () => {
    this.props.rollDice();
  }

  render() {
    let content;
    if (this.props.dice.rolls && this.props.dice.rolls.length > 0) {
      if (this.props.dice.rolling) {
        content = (
          <Text style={styles.welcome}>
            Rolling...
          </Text>
        );
      } else {
        content = (
          <Text style={styles.welcome}>
            You rolled a <Text style={styles.roll}>{this.props.dice.rolls[0].roll}</Text>
          </Text>
        );
      }
    } else {
      // no dice rolls yet!
      content = (
        <Text style={styles.welcome}>
          Roll your dice!
        </Text>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          {content}
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
