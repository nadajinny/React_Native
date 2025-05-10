import React from "react";
import { Platform, Dimensions, StyleSheet, SafeAreaView, Text } from "react-native";
import {MD3Colors} from 'react-native-paper'; 

const {width, height} = Dimensions.get('window')
const blue500 = '#2196f3'
const blue200 = '#90caf9'

export default function App() {
  return (
    <SafeAreaView style = {[styles.SafeAreaView]}>
      <Text style = {[styles.text]}>os: {Platform.OS}</Text>
      <Text style = {[styles.text]}>width: {width}px</Text>
      <Text style = {[styles.text]}>height: {height}px</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  SafeAreaView: {backgroundColor: blue500}, 
  text: {fontSize: 20, color: blue200}
})