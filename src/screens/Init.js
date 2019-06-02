import React, { Fragment, useEffect, useState } from 'react'
import { Text } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { NavigationActions, StackActions } from 'react-navigation'

const Init = ({ navigation }) => {
  useEffect(() => {
    getData()
  })

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@awesome:userName')
      const mainPage = !!value ? 'home' : 'login'
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: mainPage })],
      })
      navigation.dispatch(resetAction)
    } catch (e) {
      console.log('e', e)
    }
  }

  return <Fragment />
}
export default Init
