import { View, Text, Image, Pressable } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import styles from './styles';
import React from 'react';
import AppButton from './src/components/appButton';

const App = () => {
  return (
    <LinearGradient
      colors={['#392467', '#FFD1E3']}
      style={styles.container}
      start={{ x: 0.5, y: 0.5 }}
    >
    <Text style={styles.title}>Flerid Techologies</Text>
    <Image source={require("./assets/login_office.png")} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.label}>Let's</Text>
      <Text style={styles.label}>Grow</Text>
      <Text style={[styles.label, styles.togetherLabel]}>Together..</Text>
    </View>
    <View style={styles.btnContainer}>
      <AppButton buttonStyle={styles.loginBtn} label={"Log In"} onPress={()=>{}} />
      <AppButton buttonStyle={styles.signUpBtn} label={"Sign Up"} onPress={()=>{}} />
    </View>
    </LinearGradient>
  
  )
}

export default App