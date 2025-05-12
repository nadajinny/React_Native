import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as D from '../data'    

const name = D.randomName()
const avatarUrl = D.randomAvatarUrl()
const Amber500 = '#FFC107'

export default function TopBar() {
    return (
        <View style = {[styles.view]}>
            <Image style = {styles.avatar} source={{uri: avatarUrl}}/>
            <View style = {styles.centerView}>
                <Text style = {[styles.text]}>{name}</Text>
            </View>
        </View>
      
    )
}


const styles = StyleSheet.create({
    view: {flexDirection: 'row', alignItems: 'center', padding: 5, backgroundColor: Amber500}, 
    text: {fontSize: 20, color: 'white'},
    avatar: {width: 40, height: 40, borderRadius: 20}, 
    centerView: {flex: 1}
})