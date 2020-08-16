import React, {Component} from 'react';
import {} from 'react-native';
import {Actions, Router, Scene, Stack} from 'react-native-router-flux';
import {Splash} from '../../pages';

class App extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key={'Splash'} component={Splash} hideNavBar />
        </Stack>
      </Router>
    );
  }
}

export default App;
