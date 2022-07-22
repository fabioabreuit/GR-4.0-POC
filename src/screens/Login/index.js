import React, { useState } from 'react'
import styles from './styles';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import { Button, Paragraph, Dialog } from 'react-native-paper';
import MaskInput, { Masks } from 'react-native-mask-input'

export default function Login({ navigation }) {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const [button, setButton] = useState(false)

  function register() {
    navigation.navigate('Register')
    setButton(false)
  }

  function login() {
    navigation.navigate('Home')
  }

  return (
    <View
      style={styles.container}
    >
      <Image
        style={{ marginBottom: 35, width: 300, height: 130 }}
        source={require('../../assets/favicon.png')}
      />
      <View style={styles.inputView}>
        <MaskInput
          mask={Masks.BRL_CPF_CNPJ}
          value={account}
          style={styles.TextInput}
          placeholderTextColor='#003f5c'
          keyboardType='number-pad'
          placeholder='CPF ou CNPJ'
          autoCorrect={false}
          onChangeText={text => setAccount(text)}
          blurOnSubmit={false}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder='Senha'
          placeholderTextColor='#003f5c'
          value={password}
          secureTextEntry={true}
          autoCorrect={false}
          blurOnSubmit={false}
          onChangeText={text => setPassword(text)}
        />
      </View>

      <TouchableOpacity onPress={() => register()}>
        <Text style={{ textAlign: 'right', textDecorationLine: "underline" }}>Primeiro Acesso ?</Text>
      </TouchableOpacity>

      <TouchableOpacity disabled={button} onPress={() => { login(); setButton(true) }} style={styles.loginBtn}>
        {button ? <ActivityIndicator size="small" color="white" />
          : <Text style={styles.loginText}>ENTRAR</Text>}
      </TouchableOpacity>

      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Alerta</Dialog.Title>
        <Dialog.Content>
          <Paragraph>Usuário ou senha inválido!</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </View>
  )
}
