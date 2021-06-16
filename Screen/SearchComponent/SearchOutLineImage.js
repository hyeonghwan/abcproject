// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {View, Image,Text, TouchableOpacity,StyleSheet} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchOutLineImage = (props) => {
  const MoveToSearch = ()=> {
    props.navigationProps.navigate('HomeScreen');
  };

  return (
    <View style={{flexDirection: 'row'}}>
     
      <Ionicons 
      onPress={MoveToSearch}
      name={"search-outline"} 
      size={30} 
      style={styles.location}
      color={"black"}/>
    
    </View>
    
  );
};

const styles = StyleSheet.create({
    location : {
        paddingRight : 20,
    }

 
})
export default SearchOutLineImage;