import React, { useState } from 'react'
import {
  Button,
  TextInput,
  Text,
  Provider as PaperProvider,
} from 'react-native-paper'
import AsyncStorage from '@react-native-community/async-storage'
// import Home from './screens/Home.js'

const Login = ({ navigation: { navigate } }) => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const login = async () => {
    try {
      console.log('userName', userName)
      await AsyncStorage.setItem('@awesome:userName', userName)
      navigate('home')
    } catch (error) {
      // Error saving data
    }
  }
  return (
    <PaperProvider>
      <Text testID="login_title">Login Page</Text>
      <TextInput
        testID="login_userName"
        placeholder="User Name"
        value={userName}
        onChangeText={text => setUserName(text)}
      />
      <TextInput
        testID="login_password"
        placeholder="Password"
        placeholderTextColor="#202020"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <Button
        testID="login_button"
        icon="add-a-photo"
        mode="contained"
        onPress={login}
      >
        Login
      </Button>
    </PaperProvider>
  )
}
export default Login
