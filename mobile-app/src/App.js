import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ConfigScreen from './screens/ConfigScreen';
import PacingScreen from './screens/PacingScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Config" component={ConfigScreen} />
                <Stack.Screen name="Pacing" component={PacingScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;