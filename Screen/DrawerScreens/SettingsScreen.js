// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {View, Text, SafeAreaView,SectionList,StyleSheet,StatusBar} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { List } from 'react-native-paper';
const SettingsScreen = () => {
  return(
    <List.Section>
    <List.Subheader>Profile info</List.Subheader>
    <List.Item title="배달 주소 관리" left={() => <List.Icon icon="bycycle" />} />
    <List.Item
      title="즐겨찾기"
      left={() => <List.Icon color="#000" icon="heart-outline" />}
    />
    <List.Item
      title="할인쿠폰"
      left={() => <List.Icon color="#000" icon="logo" />}
    />
    <List.Item
      title="진행중인 이벤트"
      left={() => <List.Icon color="#000" icon="alert" />}
    />
    <List.Item
      title="결제관리"
      left={() => <List.Icon color="#000" icon="card-outline" />}
    />
    <List.Item
      title="고객지원"
      left={() => <List.Icon color="#000" icon="call-outline" />}
    />
  </List.Section>

  );
};

export default SettingsScreen;