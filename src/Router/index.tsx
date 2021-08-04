import React from 'react';
import { NavigationContainer, StackNavigationState } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login';
import SigNup from '../pages/SigNup';
import ForgotPassword from '../pages/ForgotPassword';
import FarmerResistration from '../pages/FarmerResistration';


export default function Route(){
    const Stack = createStackNavigator();

    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{
            headerShown: false
          }} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{
            headerShown: false}}/>
          <Stack.Screen name="SigNup" component={SigNup} options={{
              headerShown: false}}/>
          <Stack.Screen name="FarmerResistration" component={FarmerResistration} options={{
              headerShown:false}}/>
          </Stack.Navigator>
        </NavigationContainer> 
 
)
          }
