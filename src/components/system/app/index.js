import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
import {Splash, Home, Holidays, HolidayAdd} from '../../pages';
import colors from '../../../assets/colors';
import {Provider} from 'react-redux';
import store from '../../../config/redux';

class App extends Component {
  constructor(props) {
    super(props);
    StatusBar.setBarStyle('dark-content', true);
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene key={'Splash'} component={Splash} hideNavBar initial />
            <Scene key={'Home'} component={Home} hideNavBar />
            <Scene
              key={'Holidays'}
              component={Holidays}
              navigationBarStyle={{backgroundColor: 'cyan'}}
              titleStyle={{color: colors.black}}
              backButtonTextStyle={colors.black}
              backButtonTintColor={colors.black}
              rightButtonTextStyle={{color: 'black'}}
              rightTitle={'Add'}
              onRight={() => Actions.push('HolidayAdd')}
            />
            <Scene
              key={'HolidayAdd'}
              component={HolidayAdd}
              navigationBarStyle={{backgroundColor: 'cyan'}}
              titleStyle={{color: colors.black}}
              backButtonTextStyle={colors.black}
              backButtonTintColor={colors.black}
            />
          </Stack>
        </Router>
      </Provider>
    );
  }
}
export default App;
