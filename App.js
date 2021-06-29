/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Contador(){
  const [count, setCount] = useState(0);

  return (
      <View style = {Background.container}> 
        <Text style = {Titulo.texto}>Quantidade de Pessoas</Text>
        <View style = {ContadorNum.background}>
           <Text style = {ContadorNum.cont}> {count} </Text>  
        </View>
        <TouchableOpacity style = {Button.botao} onPress = {() => setCount(count + 1)}>
          <Text style = {Button.conteudoBotao}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {Button.botao} onPress = {() => setCount(count - 1)}>
          <Text style = {Button.conteudoBotao}>-</Text>
        </TouchableOpacity>
      </View>
  )
}

const Background = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#636aba',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
    
  }
})

const Titulo = StyleSheet.create ({
  texto: {
      color: '#ffffff',
      fontSize: 33,
      margin: -150
  }
})

const Button = StyleSheet.create ({
  botao: {
      backgroundColor: '#2e2252',
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
      width:  265,
      borderRadius: 10,
      margin: -120
  },
  conteudoBotao: {
      color: '#ffffff',
      fontSize: 50,
  }
})

const ContadorNum = StyleSheet.create({
  background: {
      backgroundColor: '#ffffff',
      height: 120,
      width: 230,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      margin: -100
      
  },
  cont: {
      color: '#000000',
      fontSize: 50,
  }
})