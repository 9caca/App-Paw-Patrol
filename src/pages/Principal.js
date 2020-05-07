import React from 'react';
import { View , Image, StyleSheet, TouchableOpacity } from 'react-native';

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
            <Image
                style={styles.logo}
                source={PupBadge}/>
            <Image
                style={styles.badges}
                source={ChaseBadge}/>
            <Image
                style={styles.badges}
                source={EverestBadge}/>
            <Image
                style={styles.badges}
                source={MarshalBadge}/>
            <Image
                style={styles.badges}
                source={RockyBadge}/>
            <Image
                style={styles.badges}
                source={RubbleBadge}/>
            <Image
                style={styles.badges}
                source={SkyeBadge}/>
            <Image
                style={styles.badges}
                source={TrackerBadge}/>
            <Image
                style={styles.badges}
                source={ZumaBadge}/>
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
    }
})
