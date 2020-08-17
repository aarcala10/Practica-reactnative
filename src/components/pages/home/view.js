import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {getCountries} from '../../../api';

class Home extends React.Component {
  componentDidMount() {
    getCountries()
      .then((res) => {
        console.log('countries:', res);
      })
      .catch((e) => {
        console.log('error:', e);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>HOME</Text>
      </View>
    );
  }
}

export default Home;
