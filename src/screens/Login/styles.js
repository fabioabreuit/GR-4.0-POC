import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    marginBottom: 40
  },
  inputView: {
    backgroundColor: colors.white,
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: "center"
  },
  TextInput: {
    height: 50,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30
  },
  loginBtn: {
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
