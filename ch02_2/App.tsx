import React from "react"
import { SafeAreaView, Text } from "react-native"

export default function App() {
  const isLoading = true
  return (
    <SafeAreaView>
      {isLoading && <Text>Loading... </Text>}
      {!isLoading && <Text>Hello JSX world!</Text>}
    </SafeAreaView>
  )
}