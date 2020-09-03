import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    alignItems: 'center',
    marginBottom: 16,
    marginLeft: 12,
    marginRight: 12,
    height: 80,
    backgroundColor: 'lime',
    borderRadius: 8,
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 3,
  },

  text: {fontWeight: 'bold', fontSize: 20},

  date: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlignVertical: 'center',
    color: 'red',
  },
});
