import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import HomeScreen from './src/screens/Home.js'
import LoginScreen from './src/screens/Login.js'
import InitScreen from './src/screens/Init.js'

const MainNavigator = createStackNavigator(
  {
    home: { screen: HomeScreen },
    login: { screen: LoginScreen },
    initScreen: { screen: InitScreen },
  },
  {
    // Default config for all screens
    initialRouteName: 'initScreen',
  }
)

const App = createAppContainer(MainNavigator)

export default App
