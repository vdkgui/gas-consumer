import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default  props => { 

    const tag = () =>{
        if (props.result <= 4){
            color = '#d41500'
            letter = 'E'
          }else if(props.result <= 8){
            color = '#d48d00'
            letter = 'D'
          }else if(props.result <= 10){
            color = '#d4c600'
            letter = 'C'
          }else if(props.result <= 12){
            color = '#43d400'
            letter = 'B'
          }else{
            color = '#00d46a'
            letter = 'A'
          }
        return {letter: letter, color: color}
    }
    return (
        <View>
            <Text style={styles.text}>Consumo:</Text>
            <Text style={styles.text}>{props.result} km/l</Text>
            <Text style={styles.text}>Bandeira de consumo:</Text>
            <View style={[styles.container,{backgroundColor: tag().color}]}>
                <Text style={styles.text_container}>{tag().letter}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 5,
        width: 200,
        height: 55,
    },
    container: {
        flex: 0.35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
      },
    text_container: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    }
})