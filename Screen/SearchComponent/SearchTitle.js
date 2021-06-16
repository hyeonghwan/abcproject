import React from 'react';
import {Animated,Dimensions,StyleSheet,TextInput,View,Async} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState,useEffect } from 'react/cjs/react.development';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';
import 'moment/locale/ko';
import SearchScreen from './SearchScreen';

export const deviceWidth =Dimensions.get('screen').width;

const SearchTitle =(props)=>{
    const[inputValue,setInputValue]=useState('');
    const testdateTime = moment().format('YYYY-MM-DD');
    const [keywords,setKeywords]=useState('')

    // _searchData =()=>{
    //     const newKeyword={
    //         id: testdateTime,
    //         text: inputValue,
    //     }
    //     AsyncStorage.setItem('newKeyword',JSON.stringify(newKeyword));
    //     props.navigationProps.navigate('HomeScreen');
    // }

     //keyword에 변화가 일어날때만 랜더링
  useEffect(() => {
    //array 타입을 string형태로 바꾸기 위해 json.stringfy를 사용한다.
    AsyncStorage.setItem('keywords', JSON.stringify(keywords))
  }, [keywords]);

  //검색어 추가
  const handleAddKeyword = (inputValue) => {
    console.log('inputValue', inputValue)
    const newKeyword = {
      id: Date.now(),
      text: inputValue,
    }
    setKeywords([newKeyword,...keywords])
 
    //console.log(keywords);
  }
    
    // const MoveToSearch = ()=> {
        
        
    //     props.navigationProps.navigate('SearchScreen',{test : newKeyword});
    //     //props.navigationProps.navigate('HomeScreen')
    //   }
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
                onPress={()=>handleAddKeyword(inputValue)}
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