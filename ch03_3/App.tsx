import React from "react";
import { StyleSheet, SafeAreaView, ImageBackground, Image, View, Text, Platform, Alert} from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import * as D from './src/data'


const avatarUrl = D.randomAvatarUrl()
const avatarSize = 50
const text = 'Almost before we knew it, we had left the ground. '
const onIconpressed = () => Alert.alert('icon pressed') 
const lightBlue500 = '#03A9F4' // Material Design light blue 500

export default function App() {
  return (
    <SafeAreaView style = {[styles.flex]}>
      <ImageBackground style = {[styles.flex]} source = {require('./src/assets/images/image.png')}>
        <Image source = {{uri: avatarUrl}} style= {[styles.image]}/>
        <View style={[styles.flex, styles.padding10]}> 
          <Text style={[styles.text, styles.regular]}>{text}[regular]</Text>
          <Text style={[styles.text, styles.medium]}>{text}[medium]</Text>
          <Text style={[styles.text, styles.semiBold]}>{text}[semiBold]</Text>
          <Text style={[styles.text, styles.bold]}>{text}[bold]</Text>
        </View>
        <MaterialIcons name="home" size = {50} color={lightBlue500} onPress = {onIconpressed}/>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  flex: {flex: 1},
  ImageBackground: {padding: 10}, 
  image: {width: avatarSize, height: avatarSize, borderRadius: avatarSize/2},
  padding10: {padding: 10}, 
  text: {textAlign: 'center', fontSize: 25, color: 'white', marginBottom: 10}, 

  regular: {fontFamily: 'DancingScript-Regular', fontWeight: '400'}, 
  medium: {fontFamily: 'DancingScript-Medium', fontWeight: '500'}, 
  semiBold: {fontFamily: 'DancingScript-SemiBold', fontWeight: '600'}, 
  bold: {fontFamily: 'DancingScript-Bold', fontWeight: Platform.select({ios: '700', android: '600'})}
})