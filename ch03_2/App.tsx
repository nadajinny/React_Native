import React from "react";
import { Platform, Dimensions, StyleSheet, SafeAreaView, Text, View} from "react-native";

const {width, height} = Dimensions.get('window')

const BLUE_200 = "#90caf9";
const BLUE_500 = "#2196f3";
const BLUE_900 = "#0d47a1";
const LIME_500 = "#cddc39";

export default function App() {
  return (
    <SafeAreaView style = {[styles.SafeAreaView]}>
      <Text style = {[styles.text]}>os: {Platform.OS}</Text>
      <Text style = {[styles.text]}>width: {width}px</Text>
      <Text style = {[styles.text]}>height: {height}px</Text>

      <View style = {[styles.box]}/>
      <View style = {[styles.box, styles.border, {borderRadius: 20}]}/>
      <View style = {[styles.box, styles.border, {borderTopLeftRadius: 40, borderBottomLeftRadius: 40}]}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  SafeAreaView: {backgroundColor: BLUE_500}, 
  text: {fontSize: 20, color: BLUE_200},
  box: {height: 100, backgroundColor: LIME_500, marginBottom: 10}, 
  border: {borderWidth: 10, borderColor: BLUE_900}
})