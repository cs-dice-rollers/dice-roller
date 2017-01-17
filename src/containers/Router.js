import React, { Component, PropTypes } from 'react';
import { NavigationExperimental } from 'react-native';
import { connect } from 'react-redux';

import Home from './Home';
import History from './History';

const { CardStack } = NavigationExperimental;

@connect(
  state => state,
  dispatch => ({ dispatch }),
)
export default class Router extends Component {
  static propTypes = {
    routes: PropTypes.shape(),
    dispatch: PropTypes.func.isRequired,
  };

  handleNavigation = (action) => {
    this.props.dispatch(action);
  }

  renderScene = (props) => {
    switch (props.scene.key) {
      case 'scene_home':
        return <Home navigate={this.handleNavigation} />;
      case 'scene_history':
        return <History navigate={this.handleNavigation} />;
      default:
        return null;
    }
  }

  render() {
    return (
      <CardStack
        direction="horizontal"
        navigationState={this.props.routes}
        renderScene={this.renderScene}
      />
    );
  }
}
