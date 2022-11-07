import * as React from 'react';
import {NavigationContainer}from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../Auth/Login';
import Registro from '../Auth/Registro';

const Stack = createStackNavigator();

const  Navigation= props =>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='inicio'>
                <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
                <Stack.Screen name="Registro" component={Registro} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;