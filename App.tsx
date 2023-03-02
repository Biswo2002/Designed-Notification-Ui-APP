import { NativeBaseProvider } from 'native-base'
import { StyleSheet } from 'react-native'
import React from 'react'
import Notification from './src/Notification'

const App = () => {
  return (
    <NativeBaseProvider>
      <Notification />
    </NativeBaseProvider>
  )
}

export default App

const styles = StyleSheet.create({})