import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { MD3Colors } from "react-native-paper";

const blue500 = '#2196f3'
const blue200 = '#90caf9'

console.log(blue500)

export default function App() {
  return (
    <SafeAreaView style= {[styles.safeAreaView]}>
      <Text style={[styles.text]}>Hello StyleSheet world!</Text>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  safeAreaView: {flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: blue500},
  text: {fontSize: 20, color: blue200}
})