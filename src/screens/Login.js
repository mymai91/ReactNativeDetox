import React, { useState } from 'react'
import {
  Button,
  TextInput,
  Text,
  Provider as PaperProvider,
} from 'react-native-paper'

const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {
    console.log('userName', userName)
    _storeData = async () => {
      try {
        await AsyncStorage.setItem('@awesome:userName', userName)
      } catch (error) {
        // Error saving data
      }
    }
  }
  return (
    <PaperProvider>
      <Text testId="login_title">Login Page</Text>
      <TextInput
        testId="login_userName"
        label="User Name"
        value={userName}
        onChangeText={text => setUserName(text)}
      />
      <TextInput
        testId="login_password"
        placeholder={'Password'}
        placeholderTextColor="#202020"
        secureTextEntry={true}
        value={password}
      />

      <Button
        testId="login_button"
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
