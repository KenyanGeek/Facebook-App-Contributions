import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  categoriesItemContainer: {
    flex: 1,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 215,
    width: 215,
    borderColor: '#dddddd',
    borderWidth: 1,
    borderRadius: 20,

  },
  categoriesPhoto: {
    flex: 3,
    width: '100%',
    height: 155,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3
  },
  categoriesName: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginTop: 8
  },
  categoriesInfo: {
    flex: 1,
    marginTop: 3,
    marginBottom: 5
  }
});

export default styles;