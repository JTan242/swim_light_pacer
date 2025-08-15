import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, marginBottom: 20 }}>Welcome to Swim Light Pacer</Text>
            <Button
                title="Configure Settings"
                onPress={() => navigation.navigate('ConfigScreen')}
            />
            <Button
                title="Start Pacing"
                onPress={() => navigation.navigate('PacingScreen')}
                style={{ marginTop: 10 }}
            />
        </View>
    );
};

export default HomeScreen;