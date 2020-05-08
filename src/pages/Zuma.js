import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import pupZuma from '../assets/Zuma.png';

export default function Zuma({ navigation }) {
    return (
        <View style={styles.container}>

        <TouchableOpacity onPress={()=> navigation.navigate('Principal')}>
            <Image source={pupZuma} style = {styles.logo} />
        </TouchableOpacity>
        
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
    },
});