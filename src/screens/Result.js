import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { NavigationContainer, BaseRouter } from '@react-navigation/native'
import Result from '../components/ResultText'


export default (props) => {
    const {route} = props
    const {result} = route.params

  return (
    <View style={styles.container}>
      <Result result={JSON.stringify(result)}/>
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
})