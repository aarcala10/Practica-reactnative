import React from 'react';
import {View, Image, Alert, FlatList, Dimensions} from 'react-native';
import styles from './styles';
import {getCountries} from '../../../api';
import {} from 'react-native-reanimated';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {list: []};
  }
  async componentDidMount() {
    try {
      const getCountriesRes = await getCountries();
      console.log('getCountries:', getCountriesRes);
      const list = getCountriesRes.data.countries;
      this.setState({list});
      //this.setState({list: list});
    } catch (e) {
      Alert.alert('Alert', 'Ha ocurrido un error');
    }
  }

  _renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => Alert.alert('Atención', `${item.name} pulsado`)}
        style={{width: width / 2}}>
        <Image
          resizeMode={'contain'}
          source={{uri: item.flag}}
          style={{width: '100%', height: 150}}
        />
      </TouchableOpacity>
    );
  };

  render() {
    console.log('List countries: ', this.state.list);
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.list}
          keyExtractor={(item, index) => `card-${item.code}`}
          numColumns={2}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

export default Home;
