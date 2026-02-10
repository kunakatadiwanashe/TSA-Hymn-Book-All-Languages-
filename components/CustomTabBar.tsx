import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BottomTabBar, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import LanguageSwitcher from './LanguageSwitcher';

export default function CustomTabBar(props: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      <BottomTabBar {...props} />
      <View style={styles.languageContainer}>
        <LanguageSwitcher />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // Additional styles if needed
  },
  languageContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    alignItems: 'center',
  },
});
