import React from 'react';
import {StyleSheet,Text,View,Image,TouchableOpacity} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Pages/Home';
import PostScreen from '../Pages/Post';
import ProfileScreen from '../Pages/Profile';
import SettingScreen from '../Pages/Setting';
import { BackHandler } from 'react-native';
const Tab = createBottomTabNavigator();

const Tabs = ()=>{
    return(
        <Tab.Navigator
        tabBarOptions={{
            showLabel:false,
            style:{
                position:'absolute',
                bottom:20,
                left:20,
                right:20,
                elevation:0,
               backgroundColor:'#ffffff',
               borderRadius:15,
               height:70,
               ...styles.shadow
            }
        }}
        >
            <Tab.Screen name = "Home" component={HomeScreen} 
            options={{
            tabBarIcon:({focused})=>(
                <View style={{alignItems:'center', justifyContent:'center',top:5}}>
                    <Image source={require('../img/home.png')}
                    resizeMode='contain'
                    style={{
                        width:30,
                        height:30,
                        tintColor:focused? '#e32f45':'#748c94'
                    }}
                    />
                    <Text style={{color:focused? '#e32f45':'#748c94',fontSize:12}}>
                        HOME
                    </Text>
                </View>

            )
            }}
            />
                        <Tab.Screen name = "Post" component={PostScreen}
            options={{
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center', justifyContent:'center',top:5}}>
                        <Image source={require('../img/send.png')}
                        resizeMode='contain'
                        style={{
                            width:30,
                            height:30,
                            tintColor:focused? '#e32f45':'#748c94'
                        }}
                        />
                        <Text style={{color:focused? '#e32f45':'#748c94',fontSize:12}}>
                            SEND
                        </Text>
                    </View>
    
                )
                }}
            />
            <Tab.Screen name = "Profile" component={ProfileScreen}
            options={{
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center', justifyContent:'center',top:5}}>
                        <Image source={require('../img/profile.png')}
                        resizeMode='contain'
                        style={{
                            width:30,
                            height:30,
                            tintColor:focused? '#e32f45':'#748c94'
                        }}
                        />
                        <Text style={{color:focused? '#e32f45':'#748c94',fontSize:12}}>
                            Profile
                        </Text>
                    </View>
    
                )
                }}
            />
            <Tab.Screen name = "Setting" component={SettingScreen}
                        options={{
                            tabBarIcon:({focused})=>(
                                <View style={{alignItems:'center', justifyContent:'center',top:5}}>
                                    <Image source={require('../img/settings.png')}
                                    resizeMode='contain'
                                    style={{
                                        width:30,
                                        height:30,
                                        tintColor:focused? '#e32f45':'#748c94'
                                    }}
                                    />
                                    <Text style={{color:focused? '#e32f45':'#748c94',fontSize:12}}>
                                        Setting
                                    </Text>
                                </View>
                
                            )
                            }}
            />

        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow:{
        shadowColor:'#7f6df0',
        shadowOffset:{
            width:0,
            height:5,
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
    }
})

export default Tabs