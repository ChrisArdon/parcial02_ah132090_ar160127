import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Sumatoria from "../screens/Sumatoria";
import Resta from "../screens/Resta";
import Multiplicacion from "../screens/Multiplicacion";
import Division from "../screens/Division";
import Factorial from "../screens/Factorial";

const Tab=createBottomTabNavigator();

export default function Navigation(){
    return(
        <Tab.Navigator>
            <Tab.Screen name='suma' component={Sumatoria} options={{title:'Suma'}}></Tab.Screen>
            <Tab.Screen name='resta' component={Resta} options={{title:'Resta'}}></Tab.Screen>
            <Tab.Screen name='multiplicacion' component={Multiplicacion} options={{title:'Multiplicacion'}}></Tab.Screen>
            <Tab.Screen name='division' component={Division} options={{title:'Division'}}></Tab.Screen>
            <Tab.Screen name='factorial' component={Factorial} options={{title:'Factorial'}}></Tab.Screen>
        </Tab.Navigator>
    );
}