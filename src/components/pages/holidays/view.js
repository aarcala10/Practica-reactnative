import React from 'react';
import style from './styles';
import {SafeAreaView, FlatList, RefreshControl} from 'react-native';
import colors from '../../../assets/colors';
import {HolidayCard} from './../../molecules';

class Holidays extends React.Component {
  componentDidMount() {
    this.props.fetchHolidays();
  }
  _renderItem = ({item}) => <HolidayCard holiday={item} />;

  render() {
    const {holidaysList, loading} = this.props;
    return (
      <SafeAreaView style={style.container}>
        <FlatList
          data={holidaysList}
          keyExtractor={(item, index) => `holiday-${item.name}`}
          renderItem={this._renderItem}
          refreshControl={
            <RefreshControl
              tintColor={colors.blue}
              refreshing={loading}
              onRefresh={() => this.props.fetchHolidays()}
              title={'Loading...'}
              titleColor={colors.blue}
            />
          }
        />
      </SafeAreaView>
    );
  }
}

export default Holidays;
