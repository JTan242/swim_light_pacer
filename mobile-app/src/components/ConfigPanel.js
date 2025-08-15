import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ConfigPanel = ({ onConfigChange }) => {
    const [numLeds, setNumLeds] = useState(50);
    const [numSwimmers, setNumSwimmers] = useState(2);
    const [pace, setPace] = useState(0.5);

    const handleSubmit = () => {
        const config = {
            numLeds: parseInt(numLeds, 10),
            numSwimmers: parseInt(numSwimmers, 10),
            pace: parseFloat(pace),
        };
        onConfigChange(config);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Number of LEDs:</Text>
            <TextInput
                style={styles.input}
                value={String(numLeds)}
                onChangeText={setNumLeds}
                keyboardType="numeric"
            />
            <Text style={styles.label}>Number of Swimmers:</Text>
            <TextInput
                style={styles.input}
                value={String(numSwimmers)}
                onChangeText={setNumSwimmers}
                keyboardType="numeric"
            />
            <Text style={styles.label}>Pace (seconds):</Text>
            <TextInput
                style={styles.input}
                value={String(pace)}
                onChangeText={setPace}
                keyboardType="numeric"
            />
            <Button title="Update Config" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        marginBottom: 5,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
});

export default ConfigPanel;