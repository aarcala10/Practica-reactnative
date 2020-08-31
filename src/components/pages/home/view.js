import React from 'react';
import {FlatList, SafeAreaView, RefreshControl} from 'react-native';
import styles from './styles';
import {CountryCard} from './../../molecules';
import {Actions} from 'react-native-router-flux';
import colors from '../../../assets/colors';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchCountries();
  }

  _onCountryPress = (country) => {
    this.props.setCountrySelected(country);
    Actions.push('Holidays', {title: country.name});
  };

  _renderItem = ({item}) => (
    <CountryCard country={item} onPress={this._onCountryPress} />
  );

  render() {
    const {countriesList, loading} = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={countriesList}
          keyExtractor={(item) => `card-${item.code}`}
          numColumns={2}
          renderItem={this._renderItem}
          refreshControl={
            <RefreshControl
              tintColor={colors.blue}
              refreshing={loading}
              onRefresh={() => this.props.fetchCountries()}
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
