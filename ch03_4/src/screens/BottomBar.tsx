import React from 'react'
import { NativeModules, StyleSheet, View} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as D from '../data'    

const iconSize = 30, iconColor = 'white'
const icons = ['home', 'table-search', 'face-profile-woman', 'account-settings']
const lightBlue500 = '#03A9F4'
export default function BottomBar() {
    const children = icons.map((name)=>(
        <Icon key = {name} name = {name} size={iconSize} color = {iconColor}/>
    ))
    return <View style = {styles.view}>{children}</View>
}


const styles = StyleSheet.create({
    view: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-around', 
        padding: 10, backgroundColor: lightBlue500
    }
})