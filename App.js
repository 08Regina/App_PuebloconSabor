/*import React from "react";
import Login from "./src/screens/Login";
import Registro from "./src/screens/Registro";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function App(){
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Registro" component={Registro}/>
    </Stack.Navigator>
  );
}
export default ()=>{
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}
*/
import * as React from 'react';
import Navigation from './src/screens/Navigation/Navigation';


const App = () =>{
  return (
    <Navigation/>
  )
};

export default App;
