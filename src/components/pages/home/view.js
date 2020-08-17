import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {getCountries} from '../../../api';
import {} from 'react-native-reanimated';

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
      console.log('getCountries error: ', e);
    }
  }

  render() {
    console.log('List countries: ', this.state.list);
    return (
      <View style={styles.container}>
        {this.state.list.map((v, i) => (
          <Text key={`cell-${i}`} style={{marginVertical: 20, color: 'grey'}}>
            {v.name}
          </Text>
        ))}
      </View>
    );
  }
}

export default Home;
