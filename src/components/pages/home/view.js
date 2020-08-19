import React from 'react';
import {
  View,
  Image,
  Alert,
  FlatList,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import {getCountries} from '../../../api';
import {} from 'react-native-reanimated';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CountryCard} from './../../molecules';

const {width} = Dimensions.get('window');

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

  _renderItem = ({item}) => <CountryCard country={item} />;

  render() {
    console.log('List countries: ', this.state.list);
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.list}
          keyExtractor={(item) => `card-${item.code}`}
          numColumns={2}
          renderItem={this._renderItem}
        />
      </SafeAreaView>
    );
  }
}

export default Home;
