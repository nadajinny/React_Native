import React from "react"
import { SafeAreaView, Text } from "react-native"

export default function App() {
  const children = [
    <Text>HelloWorld!</Text>, 
    <Text>HelloWorld!</Text>, 
    <Text>HelloWorld!</Text>
  ]
  return <SafeAreaView>{children}</SafeAreaView>
}