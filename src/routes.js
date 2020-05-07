import * as React from 'react';
import { Text, StatusBar, Button, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import Principal from './pages/Principal';
import Chase from './pages/Chase';
import Skye from './pages/Skye';

const Routes = createAppContainer(
    createStackNavigator({
        Principal,
        Chase,
        Skye,
    })
);

export default Routes;

