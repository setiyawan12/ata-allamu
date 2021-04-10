import React, { Component } from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import macbook from '../../img/macbook.jpg'

const Card =()=>{
    return(
    <View style={{padding:12, backgroundColor:'#f2f2f2', width:212, borderRadius:8,margin:10}}>
      <Image source={macbook} style={{width:188,height:107,borderRadius:8}}/>
      <Text style={{fontSize:14, fontWeight:'bold', marginTop:16}}>New Macbook Pro 2019</Text>
      <Text style={{fontSize:12, fontWeight:'bold', color:'#F2994A', marginLeft:10, paddingTop:3}}>Rp. 25.000.000</Text>
      <Text style={{fontSize:12, fontWeight:'300', marginLeft:10, color:'white'}}>Tegal Utara</Text>
      <View style={{backgroundColor:'#6FCF97',paddingVertical:6,borderRadius:25,marginTop:20}}>
        <Text style={{fontSize:14, fontWeight:'600',color:'white',textAlign:'center'}}>BELI</Text>
      </View>
    </View>
    )
}

export default Card