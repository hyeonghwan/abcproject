// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React
import React from 'react';
import {Modal, TextInput} from 'react-native';
import { Platform } from 'react-native'
// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Screens
import HomeScreen from './DrawerScreens/Product/HomeScreen';
import SettingsScreen from './DrawerScreens/SettingsScreen';
import SearchScreen from './SearchComponent/SearchScreen';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';
import SearchNavigateImage from './SearchComponent/SearchNavigateImage';

import ProductDetailScreen from './DrawerScreens/Product/ProductDetailScreen';
import FavoritesListScreen from './DrawerScreens/FavoritesListScreen';
import DeliveryHistoryScreen from './DrawerScreens/DeliveryHistoryScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchTitle from './SearchComponent/SearchTitle'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DelivertHistoryScreen from './DrawerScreens/DeliveryHistoryScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator(); 

const ProductStack= createStackNavigator();
const SettingStack= createStackNavigator();
const FavoritesListStack= createStackNavigator();
const DeliveryHistoryStack = createStackNavigator();
const SearchStack= createStackNavigator();




const Product = ({navigation}) => {
  return (
    <ProductStack.Navigator initialRouteName="HomeScreen">
      <ProductStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'ABC market', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerRight: () => (
           <SearchNavigateImage navigationProps={navigation}/>
           ),
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: 'white', //Set Header color
          },
          headerTintColor: 'black', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <ProductStack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
        options={{
          title: 'detail', //Set Header Title
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: 'white', //Set Header color
          },
          headerTintColor: 'black', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
          headerRight: ()=>(<Ionicons name="cart" size={30}></Ionicons>),
        }}
      />

       <ProductStack.Screen
        name="SearchScreen"
        component={SearchScreen}
    
        options={{ 
          
          title: null,
          headerRight: ()=><SearchTitle navigationProps={navigation} />,
          headerBackTitleVisible: false, 
          //headerRight: () => (  
         //   <SearchOutLineImage navigationProps={navigation}/>
         //  ),

          headerTintColor: 'black',
          

          }}
         
      />
    </ProductStack.Navigator>
  );
};



const settingScreenStack = ({navigation}) => {
  return (
    <SettingStack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: 'white', //Set Header color
        },
        headerTintColor: 'black', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <SettingStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Settings', //Set Header Title
        }}
      />
    </SettingStack.Navigator>
  );
};
const FavoritesListScreenStack = ({navigation}) => {
  return (
    <FavoritesListStack.Navigator
    initialRouteName="FavoritesListScreen"
    screenOptions={{
      headerLeft: () => (
        <NavigationDrawerHeader navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: 'white', //Set Header color
        },
        headerTintColor: 'black', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
    }}>
      <FavoritesListStack.Screen
        name="FavoritesListScreen"
        component={FavoritesListScreen}
        options={{
          title: '즐겨찾기'
        }}
      />
    </FavoritesListStack.Navigator>
   );   
};

const DeliveryHistoryScreenStak =({navigation})=>{
  return (
    <DeliveryHistoryStack.Navigator
    initialRouteName="DeliveryHistoryScreen"
    screenOptions={{
      headerLeft: () => (
        <NavigationDrawerHeader navigationProps={navigation}/>
      ),
      headerStyle: {
        backgroundColor: 'white', //Set Header color
        },
        headerTintColor: 'black', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
    }}>
        <DeliveryHistoryStack.Screen
        name="DeliveryHistoryScreen"
        component={DeliveryHistoryScreen}
        options={
          {title: '배송내역'}
        }
        />
    </DeliveryHistoryStack.Navigator>
  );
};

const TabScreen =()=>{
  return(
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({ focused,color,size}) =>{
            
            let iconName = '';
            if(route.name === "상품"){
              if(Platform.OS === 'ios')
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
              }
              else if(route.name === "설정"){
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }
              else if(route.name === "즐겨찾기"){
                iconName = focused ? 'ios-heart' : 'ios-heart-outline';
              }
              else if(route.name === "주문내역"){
                iconName = focused ? 'ios-beaker' : 'ios-beaker-outline';
              }  
              return <Ionicons name={iconName} size={size} color={color}/>;
            },
        })
      }
        tabBarOptions = {{
          activeTintColor : 'gray',
          inactiveTintColor : 'black',
        }}>
        <Tab.Screen name="상품" component={Product} />
        <Tab.Screen name="즐겨찾기" component={FavoritesListScreenStack}/>
        
        <Tab.Screen name="주문내역" component={DeliveryHistoryScreenStak}/>
        <Tab.Screen name="설정" component={settingScreenStack} />
      </Tab.Navigator>
  );
};

const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#d8d8d8',
        },
      }}
      screenOptions={{headerShown: false}}
      drawerContent={CustomSidebarMenu}
      >
      
      <Drawer.Screen
        name="TabScreen"
        options={{drawerLabel: '상품 리스트'}}
        component={TabScreen}
      />
       <Drawer.Screen
        name="FavoritesListScreen"
        options={{drawerLabel: '즐겨찾기'}}
        component={FavoritesListScreenStack}
      />
       <Drawer.Screen
        name="DeliveryHistoryScreen"
        options={{drawerLabel: '배송내역'}}
        component={DeliveryHistoryScreenStak}
      />
      <Drawer.Screen
        name="settingScreenStack"
        options={{drawerLabel: '환경 설정'}}
        component={settingScreenStack}
      />

      
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;