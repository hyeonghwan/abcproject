// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import { List } from 'react-native-paper';
const DelivertHistoryScreen = () => {
  return (
    <List.Section>
    <List.Subheader>배송 내역</List.Subheader>
    <List.Item title="배송 내역" left={() => <List.Icon icon="heart-outline" />} />
    <List.Item
      title="배송 내역2"
      left={() => <List.Icon color="#000" icon="heart-outline" />}
    />
    
  </List.Section>
  );
};

export default DelivertHistoryScreen;