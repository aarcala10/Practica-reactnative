import React from 'react';
import {Alert, FlatList, SafeAreaView, RefreshControl} from 'react-native';
import styles from './styles';
import {getCountries} from '../../../api';
import {CountryCard} from './../../molecules';
import {Actions} from 'react-native-router-flux';
import colors from '../../../assets/colors';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {list: []};
    this.state.loading = true;
  }
  componentDidMount() {
    this._initCountries();
  }
  _initCountries = async () => {
    try {
      this.setState({loading: true});
      const getCountriesRes = await getCountries();
      console.log('getCountries:', getCountriesRes);
      const list = getCountriesRes.data.countries;
      this.setState({list, loading: false});
    } catch (e) {
      this.setState({loading: false});
      Alert.alert('Alert', 'Ha ocurrido un error');
    }
  };
  _onCountryPress = (country) => {
    Actions.push('Holidays', {country, title: country.name});
    console.log('Country pulsado');
  };

  _renderItem = ({item}) => (
    <CountryCard country={item} onPress={this._onCountryPress} />
  );

  render() {
    const {list, loading} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={list}
          keyExtractor={(item) => `card-${item.code}`}
          numColumns={2}
          renderItem={this._renderItem}
          refreshControl={
            <RefreshControl
              tintColor={colors.blue}
              refreshing={loading}
              onRefresh={() => this._initCountries}
              title={'Loading...'}
              titleColor={colors.blue}
            />
          }
        />
      </SafeAreaView>
    );
  }
}

export default Home;
