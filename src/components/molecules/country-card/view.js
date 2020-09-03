import React, {Component} from 'react';
import style from './styles';
import {TouchableOpacity, Image, Text, Dimensions} from 'react-native';
import {color} from 'react-native-reanimated';

const deviceWidth = Dimensions.get('window').width;

class CountryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    };
  }

  async componentDidMount() {
    this.mounted = true;

    const callback = (width, height) => {
      if (this.mounted) {
        const cardWidth = deviceWidth / 2;
        const cardHeight = (cardWidth * height) / width;
        this.setState({height: cardHeight, width: cardWidth});
      }
    };
    Image.getSize(this.props.country.flag, callback);
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const {country, onPress} = this.props;
    const {width, height} = this.state;
    return (
      <TouchableOpacity onPress={() => onPress(country)}>
        <Image
          resizeMode={'cover'}
          source={{uri: country.flag}}
          style={{width: width, height: height}}
        />
        <Text style={style.card}>{country.name}</Text>
      </TouchableOpacity>
    );
  }
}

CountryCard.defaultProps = {
  onPress: () => {},
};

export default CountryCard;
