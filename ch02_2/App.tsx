import React from "react"
import { SafeAreaView, Text } from "react-native"

export default function App() {
  const isLoading = true
  if(isLoading) {
    return (
      <SafeAreaView>
        <Text>Loading...</Text>
      </SafeAreaView>
    )
  }
}