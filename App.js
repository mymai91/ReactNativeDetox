import React, { useState, useEffect } from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { Text } from 'react-native'
import Home from './src/screens/Home.js'
import Login from './src/screens/Login.js'

const App = () => {
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    console.log('authenticated', authenticated)
  }, [])
  return (
    <PaperProvider>
      <Text testID="appTitle">Hilo I am Jany</Text>
      {authenticated ? <Home /> : <Login />}
    </PaperProvider>
  )
}

export default App
