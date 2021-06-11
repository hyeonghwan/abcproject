// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {View, Text, SafeAreaView,StyleSheet} from 'react-native';

const FavoritesListScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
         <Text style={styles.styleText}>
            즐겨찾기 등록한 상품이 없습니다.
         </Text>
         <Text style={styles.styleText2}>
         좋아하는 상품에 ♥ 를 눌러주세요
         </Text>
      </View>
    </SafeAreaView>
  );
};
const styles=StyleSheet.create({
   container: {
      flex: 1,
      padding: 16,
   },
   styleText:{
     fontSize: 20,
     tintColor: 'black',
     alignContent: 'center',
     marginTop: 100,
     marginLeft: 50,
   },
   styleText2:{
     fontSize:20,
     marginLeft: 50,
   }
});


export default FavoritesListScreen;