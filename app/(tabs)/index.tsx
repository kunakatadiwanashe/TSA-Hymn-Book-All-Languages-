import { router } from "expo-router";
import { useContext, useState } from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { LanguageContext } from "../../context/LanguageContext";
import { hymns } from "../../data/hymn";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const { language } = useContext(LanguageContext)!;
  const [query, setQuery] = useState("");

  const filtered = hymns.filter(h =>
    h.number.toString().includes(query) ||
    Object.values(h.title).some(t =>
      t.toLowerCase().includes(query.toLowerCase())
    )
  );

  return (
    <View style={{ flex: 1, padding: 15 }}>
      <View style={styles.container}>
        <TextInput
          placeholder="Search hymn..."
          value={query}
          onChangeText={setQuery}
          style={styles.input}
          placeholderTextColor="#666"
        />
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={20} color="white" />
        </TouchableOpacity>
      </View>




      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push({ pathname: "/hymn", params: { hymn: JSON.stringify(item) } })}
          >
            <Text style={{ fontSize: 18 }}>
              {item.number}. {item.title[language as keyof typeof item.title]}
            </Text>
          </TouchableOpacity>
        )}
      />





      
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 50, // Creates the pill shape
    paddingLeft: 20,
    paddingRight: 5,
    marginVertical: 10,
    height: 55,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Elevation for Android
    elevation: 3,
    outline: 'none', // Removes the default outline on focus
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#000',
  },
  searchButton: {
    width: 45,
    height: 45,
    borderRadius: 25,
    // This creates the purple/blue gradient look from your image
    backgroundColor: '#4A00E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});