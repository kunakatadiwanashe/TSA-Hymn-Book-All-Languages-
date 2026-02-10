import { useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { LanguageContext } from '@/context/LanguageContext';

export default function TabLayout() {
  const context = useContext(LanguageContext);
  const changeLanguage = context?.changeLanguage;
  const currentLanguage = context?.language;

  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: '#4A00E0',
      tabBarInactiveTintColor: '#8E8E93',
    }}>
      {/* 1. Home / Index Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      {/* 2. English Toggle */}
      <Tabs.Screen
        name="en"
        options={{
          title: 'English',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" size={size} color={currentLanguage === 'en' ? '#4A00E0' : color} />
          ),
          tabBarButton: (props) => (
            <TouchableOpacity {...props} onPress={() => changeLanguage?.("en")} />
          ),
        }}
      />

      {/* 3. Shona Toggle */}
      <Tabs.Screen
        name="sn"
        options={{
          title: 'Shona',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" size={size} color={currentLanguage === 'sn' ? '#4A00E0' : color} />
          ),
          tabBarButton: (props) => (
            <TouchableOpacity {...props} onPress={() => changeLanguage?.("sn")} />
          ),
        }}
      />

      {/* 4. Ndebele Toggle */}
      <Tabs.Screen
        name="nd"
        options={{
          title: 'Ndebele',
          tabBarIcon: ({ color, size }) => (
            // FIXED: Now checks for 'nd'
            <Ionicons name="book" size={size} color={currentLanguage === 'nd' ? '#4A00E0' : color} />
          ),
          tabBarButton: (props) => (
            <TouchableOpacity {...props} onPress={() => changeLanguage?.("nd")} />
          ),
        }}
      />

      {/* 5. Favorites Tab */}
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}