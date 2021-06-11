// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import { 
  SafeAreaView,
  FlatList,
  Image, 
  StyleSheet, 
  Text, 
  TouchableHighlight, 
  View, 
  StatusBar,
  TextInput,
  Animated
} from 'react-native';
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";

import { useState } from 'react/cjs/react.development';
import ProductDetailScreen from './ProductDetailScreen';
import SearchComponent from '../../Components/SearchComponent';
import FocusAwareStatusBar from '../../Components/FocusStatusBar';

const DATA = [
  {
    "id": "1",
   "name": "방울토마토",
    "src":
      "https://ifh.cc/g/WoOg4q.png",
    "title": "방울 토마토",
    "content": "장수에서 자라난 신선한 토마토",
  },
  {
    "id": "2",
    "name": "시금치",
    "src":
    "https://ifh.cc/g/EDxFrf.jpg",
    "title": "시금치",
    "content": "맛있는 시금치",
  },
  {
    "id": "3",
    "name": "당근",
    "src":
    "https://ifh.cc/g/JSXWAk.jpg",
    "title": "맛있는 당근",
    "content": "꿀맛나는 당근",
  },
  {
    "id": "4",
    "name": "마늘",
    "src":
    "https://ifh.cc/g/bCTlPk.jpg",
    "title": "마늘",
    "content": "곰도 사람이 될 수 있는 마늘",
  },
    {
    "id": "5",
    "name": "양파",
    "src":
      "https://ifh.cc/g/lSFsB2.jpg",
    "title": "양파",
    "content": "먹으면 암이 치료되는 양파",
  },
  {
    "id": "6",
    "name": "소세지",
    "src":
    "https://ifh.cc/g/ACnaVp.jpg",
    "title": "소세지",
    "content": "먹으면 독일사람 되는 소세지",
  },
  {
    "id": "7",
    "name": "쌀",
    "src":
    "https://ifh.cc/g/7VERUf.jpg",
    "title": "보리 보리 쌀! 쌀100KG",
    "content": "날 먹으면 머리가 자라자라",
  },
  {
    "id": "8",
    "name": "밀",
    "src":
    "https://ifh.cc/g/mwSZ4u.jpg",
    "title": "우유 보다 맛있는 밀",
    "content": "냠냠 마시따",
  },
  {
    "id": "9",
    "name": "수박10",
    "src":
    "https://playgame-img.kakaogame.com/production/images/1j22-2019-08-09/14-13-27-593/appIcon.jpeg",
    "title": "Fourth Item",
    "content": "박형환 코딩하다 사망한 것으로 밣혀져 충격",
  },
  {
    "id": "10",
    "name": "수박11",
    "src":
    "https://playgame-img.kakaogame.com/production/images/1j22-2019-08-09/14-13-27-593/appIcon.jpeg",
    "title": "Fourth Item",
    "content": "박형환 코딩하다 사망한 것으로 밣혀져 충격",
  },
  {
    "id": "11",
    "name": "수박12",
    "src":
    "https://playgame-img.kakaogame.com/production/images/1j22-2019-08-09/14-13-27-593/appIcon.jpeg",
    "title": "Fourth Item",
    "content": "박형환 코딩하다 사망한 것으로 밣혀져 충격",
  },
  {
    "id": "12",
    "name": "수박13",
    "src":
    "https://playgame-img.kakaogame.com/production/images/1j22-2019-08-09/14-13-27-593/appIcon.jpeg",
    "title": "Fourth Item",
    "content": "박형환 코딩하다 사망한 것으로 밣혀져 충격",
  },
  {
    "id": "13",
    "name": "수박14",
    "src":
    "https://playgame-img.kakaogame.com/production/images/1j22-2019-08-09/14-13-27-593/appIcon.jpeg",
    "title": "Fourth Item",
    "content": "박형환 코딩하다 사망한 것으로 밣혀져 충격",
  },
  {
    "id": "14",
    "name": "수박15",
    "src":
    "https://playgame-img.kakaogame.com/production/images/1j22-2019-08-09/14-13-27-593/appIcon.jpeg",
    "title": "Fourth Item",
    "content": "박형환 코딩하다 사망한 것으로 밣혀져 충격",
  },
  {
    "id": "15",
    "name": "수박16",
    "src":
    "https://playgame-img.kakaogame.com/production/images/1j22-2019-08-09/14-13-27-593/appIcon.jpeg",
    "title": "Fourth Item",
    "content": "박형환 코딩하다 사망한 것으로 밣혀져 충격",
  },
  {
    "id": "16",
    "name": "수박17",
    "src":
    "https://playgame-img.kakaogame.com/production/images/1j22-2019-08-09/14-13-27-593/appIcon.jpeg",
    "title": "Fourth Item",
    "content": "박형환 코딩하다 사망한 것으로 밣혀져 충격",
  }
];


const HomeScreen = ({navigation}) => {
  const [scrollYValue, setScrollYValue]=useState(new Animated.Value(0));
  const clampedScroll = Animated.diffClamp(
    Animated.add(
      scrollYValue.interpolate({
        inputRange: [0,1],
        outputRange: [0,1],
        extrapolate: 'clamp',
      }),
      new Animated.Value(0),
    ),
    0,
    50,
  )

  const MoveToDetail = (props) =>{
       navigation.navigate('ProductDetailScreen',{
         img: props.src,
         title: props.title,
         content: props.content
       },
       
         
       )
  };
  const renderItem =({item}) =>(
  <View>
    <FocusAwareStatusBar barStyle="light-content" backgroundColor="#6a51ae" />
  <TouchableOpacity onPress={()=>MoveToDetail(item)}>
      <View style={styles.CardContainer}>
        <Image source={{ uri: item.src }} style={{width: 170, height: 150, borderRadius: 10}}/*style={styles.itemThumb}*//>
             <Text  style={styles.CardTitle} numberOfLines = { 1 }>{item.title}</Text>
             <Text  style={styles.CardContent} numberOfLines = { 1 }>{item.content}</Text>
      </View>
  </TouchableOpacity>
  </View>
    
);
//<SearchComponent clampedScroll={clampedScroll}/>
  return (
   <Animated.View style={{flex: 1}}>
    
    
    
      <AnimatedFlatList
       //stickyHeaderIndices={[0]}  // 0번째 index 로지정 stickyHeaderIndices=고정된 위치 설정 배열값으로  
       showsVerticalScrollIndicator={false}
       onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollYValue } } }],
         { useNativeDriver: true },
        () => { },          // Optional async listener
      )}
      
      //contentInsetAdjustmentBehavior="automatic"
      ListHeaderComponent={
        
        <View style={styles.spaceBetween}>
          
           
        </View>
      }   
         data={DATA}
        renderItem={renderItem}
        
        keyExtractor={(name) =>name.id }
        style={{ paddingLeft: 20 ,backgroundColor: 'white',}}
        numColumns={2}
        
      />
     
      
      </Animated.View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: StatusBar.currentHeight || 0,
  },
  list: {
    flex: 1,
    width: "100%",
    backgroundColor: "#f2f2f2"
  },
  sticky: {
    position: 'absolute',
    left: 0,
    right: 0,
    width: 10,
    zIndex: 1,
  },
  /*stylegridView:{
    flexDirection:"row",
        flexWrap:"wrap",
        paddingHorizontal:16,
        paddingTop:10,
        justifyContent:"space-between",
        paddingBottom:80,
},*/
spaceBetween: {
  flexDirection: "row",
  justifyContent: "space-between",
},

itemThumb: {
    width: 150,
    height: 150,
    margin: 15,
},
item: {
  backgroundColor: '#f9c2ff',
  padding: 20,
  marginVertical: 8,
  marginHorizontal: 16,
},
title: {
  fontSize: 32,
},

//cardview style
CardContainer: {
  elevation: 5,
  borderRadius: 10,
  borderWidth: 2,
  borderColor: 'green',
  margin: 1,
  elevation: 5,
  flex: 1,
  flexDirection: 'column',
},
CardTitle: {
  width: 150,
  fontWeight: 'bold',
  fontSize: 15,
  padding: 3,
  
},
CardContent: {
  width: 150,
  fontSize: 12,
  padding: 3
},
//header
header: {
  flex: 1,
},
//serach field 
selectBar: {
  width: '90%',
  height: 20,
  fontSize: 15,
  margin: '3%',
},
fristBlock: {
  marginTop: 10,
  marginLeft: 80,
  height: 30,
  width: '60%',
  borderRadius: 5,
  borderWidth: 0.5,
  borderColor: 'gray',
  alignItems: 'center',
  justifyContent: 'center',
},

  
});