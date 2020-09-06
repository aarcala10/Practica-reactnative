import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
  },

  text: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    height: 30,
    borderRadius: 6,
    marginTop: 20,
    marginBottom: 6,
    marginHorizontal: 16,
    paddingHorizontal: 6,
  },
  textInput: {
    color: 'black',
    height: 35,
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 30,
    marginHorizontal: 16,
    paddingHorizontal: 16,
  },
  error: {
    color: 'red',
    fontSize: 14,
    textAlign: 'right',
    marginHorizontal: 8,
  },
});

export default styles;
