import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ConnectionStatus = ({ isConnected }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.statusText}>
                {isConnected ? 'Connected to Raspberry Pi Server' : 'Disconnected from Raspberry Pi Server'}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: isConnected ? 'green' : 'red',
        borderRadius: 5,
        margin: 10,
    },
    statusText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default ConnectionStatus;