import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import pupRubble from '../assets/Rubble.png';

export default function Rubble({ navigation }) {
    return (
        <View style={styles.container}>

        <TouchableOpacity onPress={()=> navigation.navigate('Principal')}>
            <Image source={pupRubble} style = {styles.logo} />
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