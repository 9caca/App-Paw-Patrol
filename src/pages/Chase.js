import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import pupChase from '../assets/Chase.png';

export default function Chase({ navigation }) {
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#253372', '#ffffff', '#11215c']} style={styles.linearGradient}>
                <TouchableOpacity onPress={()=> navigation.navigate('Principal')}>
                    <Image source={pupChase} style = {styles.logo} />
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