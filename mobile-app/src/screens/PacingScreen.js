import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PaceVisualizer from '../components/PaceVisualizer';
import ConnectionStatus from '../components/ConnectionStatus';
import { getStatus } from '../services/api';
import { useSocket } from '../services/socket';

const PacingScreen = () => {
    const [status, setStatus] = useState({});
    const [loading, setLoading] = useState(true);
    const socket = useSocket();

    useEffect(() => {
        const fetchStatus = async () => {
            try {
                const response = await getStatus();
                setStatus(response);
            } catch (error) {
                console.error('Error fetching status:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStatus();

        socket.on('ledFrame', (data) => {
            setStatus((prevStatus) => ({
                ...prevStatus,
                positions: data.positions,
            }));
        });

        return () => {
            socket.off('ledFrame');
        };
    }, [socket]);

    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <ConnectionStatus />
            <Text style={styles.title}>Pacing Lines</Text>
            <PaceVisualizer positions={status.positions} numLeds={status.numLeds} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default PacingScreen;