import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import TopBar from './src/screens/TopBar'
import Content from './src/screens/Context'
import BottomBar from './src/screens/BottomBar'

const lightBlue500 = '#03A9F4'

export default function App() {
  return (
    <SafeAreaView style = {styles.flex}>
      <TopBar />
      <Content />
      <BottomBar />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  flex : {flex: 1, backgroundColor: lightBlue500 }
})