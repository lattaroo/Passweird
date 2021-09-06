import React from 'react';
import { Text, View } from 'react-native';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { styles } from './styles';

export function Notes() {

  return (
    <View style={styles.container}>
      
      <Header />
      
      <View style={styles.main}>
        <Text style={styles.text}>Notes</Text>
      </View>
      
      <Footer />
    </View>
  )
}