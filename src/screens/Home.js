import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'

import Input from '../components/Input'
import Button from '../components/ButtonCalculate'
import Logo from '../components/Image'

const textError = (msg) => {
    if(msg){
        return <Text style={styles.error}>{msg}</Text>
    }
}

export default (props) => {
    const [consumption, setCons] = useState("")
    const [distance, setDist] = useState("")
    const [error, setError] = useState(null)
    const { navigation } = props

    const calculate = () => {
        let regex = /^(?![0.]+$)\d+(\.\d{1,2})?$/
        
        if(regex.test(consumption) && regex.test(distance)) {
            setError(null)
            let fuelConsumption = Math.round(distance/consumption)
            navigation.navigate("Result", {result:fuelConsumption})
        }else{
            setError("Informe apenas valores númericos e positivos!")
        }
    }
    
  return (
    <View style={styles.container}>
      <Logo></Logo>
      <Input text="Informe o consumo:" ph="litros" onChangeText={(v) => setCons(v)}/>
      <Input text="Informe a distância:" ph="kilomêtros" onChangeText={(v) => setDist(v)}/>
      <Button text="Calcular" onPress={() => calculate()}/>
      {textError(error)}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#d41500'
  }
})