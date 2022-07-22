import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
    alignItems: 'center',
  },
  image: {
    marginBottom: 40
  },
  subTitle: {
    paddingTop: 30,
    marginBottom: 30,
    color: colors.black,
    textAlign: 'center',
  },
  title: {
    color: colors.black,
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    paddingBottom: 30,
    marginTop: 20
  },
  inputView: {
    backgroundColor: '#fff',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'flex-start',
    justifyContent: "center"
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20
  },  
  TextFirstAccess: {
    width: '80%',
    marginBottom: 40
  },
  forgot_button: {
    height: 30,
    marginBottom: 30
  },
  confirmBtn: {
    width: '70%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: colors.blue
  },
  loginText: {
    color: colors.white,
    fontWeight: 'bold'
  }
})

export default styles;