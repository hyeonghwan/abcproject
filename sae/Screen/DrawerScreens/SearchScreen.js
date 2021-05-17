// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {View, Text, SafeAreaView,StyleSheet,Button,Dimensions} from 'react-native';
import FocusAwareStatusBar from '../Components/FocusStatusBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react/cjs/react.development';
import SearchTitle from '../Components/SearchTitle';
import {useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

export const deviceWidth =Dimensions.get('screen').width;

const SearchScreen = ({route,navigation}) => {
  const [data,setData] =useState('');
  const [result,setResult]=useState('');
  //console.log(route.params.test);
  

  _loadData= async ()=>{
    AsyncStorage.getItem('newKeyword').then((value)=>{setData(JSON.parse(value))});
      
}
_loadData();
    
    
    return (
   
    <SafeAreaView style={{flex: 1,backgroundColor: 'white',}}>
        <FocusAwareStatusBar barStyle="light-content" backgroundColor="#6a51ae" />
           
          <View style={styles.Line}/>
          <View style={styles.latelyLine}>
              <Text style={styles.latelyText}>최근검색어</Text>
              <Button title="전체삭제" style={styles.button} />
          </View>

           <View style={styles.Line2}/>
             
           <View style={styles.styleHistory}> 
               <Text style={styles.styleDate}>2021.05.11</Text>
               <Text style={styles.textHistory}>토메이토</Text>
               
               
               <Ionicons 
                 name="close-circle-outline"
                 size={20}
               />
               
          </View>

    </SafeAreaView>
  );
};

const styles= StyleSheet.create({
    
    latelyLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
     },
    
    Line: {
        height: 1,
       
        backgroundColor: '#e2e2e2',
        marginTop: 10,
      },
    Line2:{
        height: 1,
        
        backgroundColor: '#e2e2e2',
        marginTop: 3,
    },

    latelyText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 5,
        
    },

    styleDate:{
        paddingLeft: 20,
        
        color: 'gray',
    },
    styleHistory: {
        justifyContent: 'space-between',
        flexDirection: 'row',
       
        padding: 10,

    },
    textHistory:{
        
        fontSize: 15,
   
    }
    
})
export default SearchScreen;