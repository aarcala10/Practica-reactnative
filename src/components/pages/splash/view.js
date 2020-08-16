import React from 'react';
import {View, Button} from 'react-native';
import styles from './styles';
import {Actions} from 'react-native-router-flux';

class Splash extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title={'INICIO'} onPress={() => Actions.replace('Home')} />
      </View>
    );
  }
}

export default Splash;
