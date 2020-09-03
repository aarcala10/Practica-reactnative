import React, {Component} from 'react';
import style from './styles';
import {View, Text, Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

class HolidayCard extends Component {
  componentDidMount() {
    this.mounted = true;
  }
  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const {holiday} = this.props;
    console.log('holiday.name', holiday.name);
    return (
      <View style={style.card}>
        <Text style={style.text}>{holiday.name}</Text>
        <Text style={style.date}>{holiday.date}</Text>
      </View>
    );
  }
}

HolidayCard.defaultProps = {
  onPress: () => {},
};

export default HolidayCard;
