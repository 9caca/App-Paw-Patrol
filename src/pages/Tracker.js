import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import pupTracker from '../assets/Tracker.png';

export default function Tracker({ navigation }) {
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#438542', '#ffffff', '#376016']} style={styles.linearGradient}>
                <TouchableOpacity onPress={()=> navigation.navigate('Principal')}>
                    <Image source={pupTracker} style = {styles.logo} />
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd',
    },
    logo: {
        width: 280,
        height: 320,
        margin: 20,
    },
    linearGradient: {
        paddingHorizontal: 200,
    }
});