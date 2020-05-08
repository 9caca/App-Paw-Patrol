import React from 'react';
import { View , Text, Button ,Image, StyleSheet, TouchableOpacity } from 'react-native';

import PupBadge from '../assets/PupBadge.png';
import ChaseBadge from '../assets/ChaseBadge.png';
import EverestBadge from '../assets/EverestBadge.png';
import MarshalBadge from '../assets/MarshalBadge.png';
import RockyBadge from '../assets/RockyBadge.png';
import RubbleBadge from '../assets/RubbleBadge.png';
import SkyeBadge from '../assets/SkyeBadge.png';
import TrackerBadge from '../assets/TrackerBadge.png';
import ZumaBadge from '../assets/ZumaBadge.png';

export default function Principal({ navigation }) {

    return (
        <View style={styles.container}>
        
            <Image source={PupBadge} style = {styles.logo} />
        
        <TouchableOpacity onPress={()=> navigation.navigate('Chase')}>
            <Image style={styles.badges} source={ChaseBadge}/></TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Everest')}>
            <Image style={styles.badges} source={EverestBadge}/></TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Marshal')}>
            <Image style={styles.badges} source={MarshalBadge}/></TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Rocky')}>
            <Image style={styles.badges} source={RockyBadge}/></TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Rubble')}>
            <Image style={styles.badges} source={RubbleBadge}/></TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Skye')}>
            <Image style={styles.badges} source={SkyeBadge}/></TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Tracker')}>
            <Image style={styles.badges} source={TrackerBadge}/></TouchableOpacity>
         <TouchableOpacity onPress={()=> navigation.navigate('Zuma')}>
            <Image style={styles.badges} source={ZumaBadge}/></TouchableOpacity>
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
        width: 140,
        height: 160,
        marginBottom: 10,
    },

    badges: {
        width: 70,
        height: 80,
    },
});

