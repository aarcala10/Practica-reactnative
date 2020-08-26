import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {Router, Scene, Stack} from 'react-native-router-flux';
import {Splash, Home, Holidays} from '../../pages';
import colors from '../../../assets/colors';

class App extends Component {
  constructor(props) {
    super(props);
    StatusBar.setBarStyle('dark-content', true);
  }

  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key={'Splash'} component={Splash} hideNavBar />
          <Scene key={'Home'} component={Home} hideNavBar />
          <Scene
            key={'Holidays'}
            component={Holidays}
            navigationBarStyle={{backgroundColor: colors.blue}}
            titleStyle={{color: colors.black}}
            backButtonTextStyle={colors.black}
            backButtonTintColor={colors.black}
          />
        </Stack>
      </Router>
    );
  }
}

export default App;
