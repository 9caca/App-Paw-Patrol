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
        Principal: {
            screen: Principal,
            navigationOptions: {
              header: null,
            },
        },
        Chase: {
            screen: Chase,
            navigationOptions: {
              header: null,
            },
        },
        Everest: {
            screen: Everest,
            navigationOptions: {
              header: null,
            },
        },
        Marshal: {
            screen: Marshal,
            navigationOptions: {
              header: null,
            },
        },
        Rocky: {
            screen: Rocky,
            navigationOptions: {
              header: null,
            },
        },
        Rubble: {
            screen: Rubble,
            navigationOptions: {
              header: null,
            },
        },
        Skye: {
            screen: Skye,
            navigationOptions: {
              header: null,
            },
        },
        Tracker: {
            screen: Tracker,
            navigationOptions: {
              header: null,
            },
        },
        Zuma: {
            screen: Zuma,
            navigationOptions: {
              header: null,
            },
        },
    }),
);

export default Routes;

