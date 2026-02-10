import { Ionicons } from '@expo/vector-icons';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { Tabs } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import LanguageSwitcher from '../../components/LanguageSwitcher';

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => (
        <View style={styles.tabBarContainer}>
          <View style={styles.languageSwitcher}>
            <LanguageSwitcher />
          </View>
          <BottomTabBar {...props} />
        </View>
      )}
    >


      <Tabs.Screen
        name="language"
        options={{
          title: 'Language',
          tabBarIcon: ({ color, size }) => <Ionicons name="language" size={size} color={color} />,
        }}
      />

      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color, size }) => <Ionicons name="heart" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  languageSwitcher: {
    padding: 10,
    alignItems: 'center',
  },
});
