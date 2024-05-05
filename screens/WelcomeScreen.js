import * as React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { styles } from '../styles/styles';

const WelcomeScreen = ({ navigation }) => {
  return <View style={styles.container}>
    <View style={styles.centeredContent}>
      <Image source={require('../assets/little-lemon-logo.png')} style={styles.logo} />
      <Text style={styles.title}>Little Lemon, your local Mediterranean Bistro</Text>
    </View>
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => {
        return navigation.navigate('Subscribe');
      }}>
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  </View>
};

export default WelcomeScreen;
