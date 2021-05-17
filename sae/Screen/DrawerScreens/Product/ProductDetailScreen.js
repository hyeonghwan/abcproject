import React, {useState} from 'react';
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
  
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

import FocusAwareStatusBar from '../../Components/FocusStatusBar';
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";

const ProductDetailScreen =({route,navigation}) =>{
  
  const {img,title,content} =route.params;
  const[detailImg]=useState(img);
  const[detailTitle]=useState(title);
  const[detailcontent]=useState(content); 
  const [selectedValue, setSelectedValue] = useState("java");
    return(
     <SafeAreaView style={{flex: 1,backgroundColor: 'white'}}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
     <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View style={styles.CardContainer}>
             <View style={styles.CardContainer2}>
                 <Image source={{uri : detailImg}} style={styles.CardImage}/*style={styles.itemThumb}*//>
             </View>
             <View style={styles.Line}/>
             <Text  style={styles.CardTitle}>{detailTitle}</Text>
             <View style={styles.Line}/>
             <Text  style={styles.CardContent}>{detailcontent}</Text>

    <View style={styles.buyfield}>
           <View style={styles.iconStyle}>
        <Ionicons name="heart-outline" size={30}  ></Ionicons>
        </View>
        <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
           <Picker.Item label="Java" value="java" />
           <Picker.Item label="JavaScript" value="js" />
        </Picker>
       <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}>
          <Text style={styles.buttonTextStyle}>Buy</Text>
        </TouchableOpacity> 
    </View>
        </View>
    </ScrollView>
    </SafeAreaView>
    );

}

export default ProductDetailScreen;
const styles =StyleSheet.create({
  CardContainer: {
    elevation: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    margin: 1,
    elevation: 5,
    flex: 1,
    flexDirection: 'column',
  },
  CardContainer2: {
    elevation: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    margin: 1,
    elevation: 5,
    flex: 1,
    flexDirection: 'column',
  },
  CardImage: {
    width: "100%",
    height: 300,
    alignItems: 'center',
  },
  CardTitle: {
    width: '100%',
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
    fontWeight: 'bold',
    fontSize: 15,
    padding: 3,
    
  },
  CardContent: {
    width: '100%',
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
    fontSize: 12,
    padding: 3
  },
  Line: {
    height: 1,
    
    backgroundColor: '#e2e2e2',
    marginTop: 15,
  },
  buyfield:{
    width:'100%',
    
    flex: 0.5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    
  },
  buttonStyle: {
    backgroundColor: 'black',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 20,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  iconStyle:{
   
    alignItems: 'center',
  
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  
  
});
