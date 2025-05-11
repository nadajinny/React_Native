import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import * as D from '../data'    

const title = 'CopyMe'
const BLUE_900 = "#0d47a1"
export default function CopyMe() {
    return (
        <View style = {[styles.view]}>
            <Text style = {[styles.text]}>{title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    view: {padding: 5, backgroundColor: BLUE_900}, 
    text: {fontSize: 20, color: 'white'}
})