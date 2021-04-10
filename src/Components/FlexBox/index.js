import React, { Component } from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

class Flexbox extends Component{
    render(){
        return(
            <View>
            {/* <View style={{backgroundColor:'#fc6c85',height: 50, width: 100}}></View> */}
            {/* <View style={{backgroundColor:'#07b8b4', width:100, height: 50}}></View> */}
            <View style={{backgroundColor:'#9f4347', flex: 1, height: 50}}></View>
            <View style={{backgroundColor:'#67f20f', flex: 1, height: 50}}></View>
            </View>
        )
    }
}
export default Flexbox