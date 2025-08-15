import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const PaceVisualizer = ({ positions, numLeds }) => {
    return (
        <View style={styles.container}>
            {positions.map((position, index) => (
                <View
                    key={index}
                    style={[
                        styles.swimmer,
                        { left: `${(position / numLeds) * 100}%` },
                    ]}
                >
                    <Text style={styles.swimmerText}>Swimmer {index + 1}</Text>
                </View>
            ))}
        </View>
    );
};

PaceVisualizer.propTypes = {
    positions: PropTypes.arrayOf(PropTypes.number).isRequired,
    numLeds: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        height: 200,
        backgroundColor: '#e0f7fa',
        borderWidth: 1,
        borderColor: '#00796b',
    },
    swimmer: {
        position: 'absolute',
        bottom: 10,
        backgroundColor: '#ffeb3b',
        padding: 5,
        borderRadius: 5,
    },
    swimmerText: {
        color: '#000',
    },
});

export default PaceVisualizer;