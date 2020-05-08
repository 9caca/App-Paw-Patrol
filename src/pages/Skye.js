import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import pupSkye from '../assets/Skye.png';

export default function Skye({ navigation }) {
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#E890B8', '#ffffff', '#EF65A0']} style={styles.linearGradient}>
                <TouchableOpacity onPress={()=> navigation.navigate('Principal')}>
                    <Image source={pupSkye} style = {styles.logo} />
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