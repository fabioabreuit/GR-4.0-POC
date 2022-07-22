import React, { useState, useEffect } from 'react'
import styles from './styles';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import MaskInput, { Masks } from 'react-native-mask-input'
import Icon from 'react-native-vector-icons/Ionicons';

export default function Register({ navigation }) {
  const [taxId, setTaxId] = useState('')
  const [cellphone, setCellphone] = useState('')

  function confirm() {
    navigation.navigate('Home')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Primeiro Acesso</Text>
      <View style={{ alignItems: "center" }}>
        <Icon
          name={'contact'}
          size={30}
          color="#3379AD"
        />
      </View>
      <Text style={styles.subTitle}>
        Entre com CPF ou CNPJ e o celular para {'\n'}iniciar o
        processo de criação do usuário.
      </Text>
      <View style={styles.inputView}>
        <MaskInput
          mask={Masks.BRL_CPF_CNPJ}
          value={taxId}
          keyboardType='number-pad'
          placeholderTextColor='#003f5c'
          placeholder='CPF ou CNPJ'
          autoCorrect={false}
          onChangeText={text => setTaxId(text)}
          blurOnSubmit={false}
          style={styles.TextInput}
        />
      </View>
      <View style={styles.inputView}>
        <MaskInput
          value={cellphone}
          mask={Masks.BRL_PHONE}
          keyboardType='phone-pad'
          placeholderTextColor='#003f5c'
          placeholder="Telefone"
          autoCorrect={false}
          blurOnSubmit={false}
          onChangeText={text => setCellphone(text)}
          style={styles.TextInput}
        />
      </View>

      <TouchableOpacity onPress={() => confirm()} style={styles.confirmBtn}>
        <Text style={styles.loginText}>CONFIRMAR</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}