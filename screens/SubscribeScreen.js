import * as React from 'react';
import { View } from 'react-native';
import { useState } from 'react';
import { Alert, Image, Pressable, Text, TextInput } from 'react-native';
import { styles } from '../styles/styles';
import { validateEmail } from '../utils/index.js';
const SubscribeScreen = () => {
  const [email, setEmail] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleInputChange = (text) => {
    setEmail(text);
    setIsButtonEnabled(text !== '');
  };

  const handleSubscribe = () => {
    Alert.alert('Subscription Confirmation', `You have subscribed with email: ${email}`);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/little-lemon-logo-grey.png')} style={styles.logo} />
      <Text style={styles.title}>Subscribe to our Newsletter</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email address"
        onChangeText={handleInputChange}
        value={email}
      />
      <Pressable
        style={[styles.button, isButtonEnabled ? {} : styles.disabledButton]}
        onPress={handleSubscribe}
        disabled={!validateEmail}
      >
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
    </View>
  );
};


export default SubscribeScreen;
