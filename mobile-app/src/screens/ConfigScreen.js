import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { updateConfig } from '../services/api';

const ConfigScreen = () => {
    const [numLeds, setNumLeds] = useState(50);
    const [numSwimmers, setNumSwimmers] = useState(2);
    const [pace, setPace] = useState(0.5);

    const handleSubmit = async () => {
        const config = { numLeds, numSwimmers, pace };
        const response = await updateConfig(config);
        if (response.status === 'ok') {
            alert('Configuration updated successfully!');
        } else {
            alert('Failed to update configuration.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Configure Pacing</Text>
            <TextInput
                style={styles.input}
                placeholder="Number of LEDs"
                keyboardType="numeric"
                value={String(numLeds)}
                onChangeText={setNumLeds}
            />
            <TextInput
                style={styles.input}
                placeholder="Number of Swimmers"
                keyboardType="numeric"
                value={String(numSwimmers)}
                onChangeText={setNumSwimmers}
            />
            <TextInput
                style={styles.input}
                placeholder="Pace (seconds)"
                keyboardType="numeric"
                value={String(pace)}
                onChangeText={setPace}
            />
            <Button title="Update Configuration" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
});

export default ConfigScreen;