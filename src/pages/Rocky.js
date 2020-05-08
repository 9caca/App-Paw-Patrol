import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import pupRocky from '../assets/Rocky.png';

export default function Rocky({ navigation }) {
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#006331', '#FFFFFF', '#035824']} style={styles.linearGradient}>
                <TouchableOpacity onPress={()=> navigation.navigate('Principal')}>
                    <Image source={pupRocky} style = {styles.logo} />
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