import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default props => {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://www.isq.pt/wp-content/uploads/sites/78/2016/10/Servicos-Regulamentares-Material-Icons_e54693_256.png',
          }}
        />
      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
      paddingBottom: 5
    },
    logo: {
      width: 100,
      height: 100,
    },
  })
  