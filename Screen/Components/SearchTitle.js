import React from 'react';
import {Animated,Dimensions,StyleSheet,TextInput,View,AsyncS} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react/cjs/react.development';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';
import 'moment/locale/ko';

export const deviceWidth =Dimensions.get('screen').width;

const SearchTitle =(props)=>{
    const[inputValue,setInputValue]=useState('d');
    const testdateTime = moment().format('YYYY-MM-DD');

    _searchData =()=>{
        const newKeyword={
            id: testdateTime,
            text: inputValue,
        }
        AsyncStorage.setItem('newKeyword',JSON.stringify(newKeyword));
        props.navigationProps.navigate('SearchScreen');
    }
    
    const MoveToSearch = ()=> {
        
        
        props.navigationProps.navigate('SearchScreen',{test : newKeyword});
        //props.navigationProps.navigate('HomeScreen')
      }
    return(
        <View style={{flexDirection: 'row'}}>
            <TextInput
            onChangeText = {(InputValue)=>setInputValue(InputValue)}
            autoFocus={true}
            placeholder='Search'
            style={styles.formField}
            placeholderTextColor={'#888888'}
            clearButtonMode={true,"while-editing"}
            />
             <Ionicons 
                onPress={()=>_searchData()}
                name={"search-outline"} 
                size={30} 
                style={styles.location}
                 color={"black"}/>
            
            </View>
    )
}
const styles =StyleSheet.create({
    formField : {
        width: deviceWidth-120,
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        padding: 12,
        marginLeft: 20,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 20,
        borderColor: '#f0f0f0',
        fontSize: 18,
        height: 40,

    },
    location : {
        paddingTop: 3,
        paddingLeft: 10,
        paddingRight : 20,
    }

})
export default SearchTitle;