import React, {Component} from 'react';
import style from './styles';
import {Dimensions, SafeAreaView} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

class Holidays extends React.Component {
  render() {
    return <SafeAreaView style={style.container}></SafeAreaView>;
  }
}

export default Holidays;
