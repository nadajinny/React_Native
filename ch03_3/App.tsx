import React from "react";
import { StyleSheet, SafeAreaView, ImageBackground } from "react-native";

export default function App() {
  return (
    <SafeAreaView style = {[styles.flex]}>
      <ImageBackground style = {[styles.flex]} source = {require('./src/assets/images/image.png')}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  flex: {flex: 1}
})