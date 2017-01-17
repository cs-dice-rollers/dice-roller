import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

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

export default class Home extends Component {
  static propTypes = {
    navigate: PropTypes.func.isRequired
  };

  rollDice() {
    // do something
  }

  toHistory = () => {
    const { navigate } = this.props;
    navigate({
      type: 'push',
      key: 'history'
    });
  }

  toCounter = () => {
    const { navigate } = this.props;
    navigate({
      type: 'push',
      key: 'counter'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.welcome}>
            Roll your dice!
          </Text>
        </View>

        <View style={styles.navigation}>
          <View style={styles.navItem}>
            <TouchableHighlight
              style={styles.button} onPress={this.toCounter} underlayColor={'#f0f0f0'}
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
