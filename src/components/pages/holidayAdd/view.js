import React from 'react';
import {SafeAreaView, Text, View, TextInput, Button} from 'react-native';
import styles from './styles';
import DatePicker from 'react-native-datepicker';

class HolidayAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: null,
    };
  }

  saveHoliday = () => {
    const {name, date} = this.state;
    const {country} = this.props;
    const data = {
      country: country,
      name: name,
      date: date,
    };
    this.props.addHoliday(data);
  };

  render() {
    const {name, error, date, country} = this.state;
    return (
      <SafeAreaView styles={styles.container}>
        <View>
          <Text style={styles.text}>{'Holiday´s name:'}</Text>
          <TextInput
            style={styles.textInput}
            placeholder={'Introduce holiday´s name'}
            onChangeText={(text) => this.setState({name: text})}
            value={name}
            error={'Obligatory'}
          />
          {error ? <Text style={styles.error}> {error}</Text> : null}
          <Text style={styles.text}>{'Holiday´s date:'}</Text>
          <DatePicker
            style={{width: 200}}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2019-01-01"
            maxDate="2019-12-31"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 16,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 52,
              },
              // ... You can check the source to find the other keys.
            }}
            onDateChange={(date) => {
              this.setState({date: date});
            }}
          />
          {name != '' && date != null ? (
            <Button
              style={{color: 'blue'}}
              title="Save"
              onPress={this.saveHoliday}
            />
          ) : null}
        </View>
      </SafeAreaView>
    );
  }
}

export default HolidayAdd;
