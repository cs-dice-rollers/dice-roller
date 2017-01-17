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

  componentWillMount() {
    this.rollDice();
  }

  rollDice = () => {
    // Move this into an action thingamajig

    const payloadBody = {
      method: 'generateIntegers',
      jsonrpc: '2.0',
      params: {
        apiKey: '5047c35e-b0ac-4666-8619-1fad7327e727',
        n: 2,
        min: 1,
        max: 20
      },
      id: 1,
    };

    fetch('https://api.random.org/json-rpc/1/invoke', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payloadBody)
    })
    .then(response => response.json())
    .then((response) => {
      console.log('RESPONSE', response.result.random.data);
    });
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
