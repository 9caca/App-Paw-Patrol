import * as React from 'react';
import { Text, StatusBar, Button, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import Principal from './pages/Principal';
import Chase from './pages/Chase';
import Everest from './pages/Everest';
import Marshal from './pages/Marshal';
import Rocky from './pages/Rocky';
import Rubble from './pages/Rubble';
import Skye from './pages/Skye';
import Tracker from './pages/Tracker';
import Zuma from './pages/Zuma';

const Routes = createAppContainer(
    createStackNavigator({
        Principal,
        Chase,
        Everest,
        Marshal,
        Rocky,
        Rubble,
        Skye,
        Tracker,
        Zuma,
    })
);

export default Routes;

