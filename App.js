import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';

import Icons from './app/components/Icons';
import AppButton from './app/components/AppButton';
import AppText from './app/components/AppText';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import ListItem from './app/components/ListItem';

export default function App() {
  return (
    <SafeAreaView>
      <Screen>
        <ListItem title="My title" ImageComponent={<Icons name="email" />} />
      </Screen>
    </SafeAreaView>
  );
}
