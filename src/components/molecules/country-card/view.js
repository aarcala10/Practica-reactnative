import React, {Component} from 'react';
import style from './styles';
import {TouchableOpacity, Image, Dimensions, Text} from 'react-native';

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
    const {country} = this.props;
    const {width, height} = this.state;
    return (
      <TouchableOpacity>
        <Image
          resizeMode={'cover'}
          source={{uri: country.flag}}
          style={{width: width, height: height}}
        />
        <Text
          style={{
            fontSize: 18,
            alignItems: 'center',
            textAlign: 'center',
          }}>
          {country.name}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default CountryCard;
