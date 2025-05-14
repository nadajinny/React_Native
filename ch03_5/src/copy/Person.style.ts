import { StyleSheet } from "react-native";

const lime100 = '#F0F4C3';
const blue500 = '#2196F3'; 
const deepPurple500 = '#673AB7'; 

export const styles = StyleSheet.create({
    view: {flexDirection: 'row', backgroundColor: lime100, padding: 5}, 
    leftView: {padding : 5}, 
    avatar: {borderColor: blue500, borderWidth: 2}, 
    rightView: {flex: 1, padding: 5, marginRight: 10}, 
    name: {marginRight: 5, fontSize: 22, fontWeight: '500'}, 
    email: {
        textDecorationLine: 'underline', color: blue500, textDecorationColor: blue500
    }, 
    dataView: {
        flexDirection: 'row', justifyContent: 'space-between', padding: 3, marginTop: 5 
    }, 
    text: {fontSize: 16}, 
    comments: {marginTop: 10, fontSize: 16}, 
    image: {height: 150, marginTop: 15}, 
    countsView: {flexDirection: 'row', padding: 3, justifyContent: 'space-around'}, 
    touchableIcon: {flexDirection: 'row', padding: 3, alignItems: 'center'},
    iconText: {color: deepPurple500, marginLeft: 3}
})