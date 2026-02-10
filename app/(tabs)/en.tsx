import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useContext, useState } from "react";
import { FlatList, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { ThemedText } from "../../components/themed-text";
import { ThemedView } from "../../components/themed-view";
import { LanguageContext } from "../../context/LanguageContext";
import { hymns } from "../../data/hymn";
import { useThemeColor } from "../../hooks/use-theme-color";

export default function EnScreen() {
  const { language } = useContext(LanguageContext)!;
  const [query, setQuery] = useState("");

  const filtered = hymns.filter(h =>
    h.number.toString().includes(query) ||
    Object.values(h.title).some(t =>
      t.toLowerCase().includes(query.toLowerCase())
    )
  );

  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');

  return (
    <ThemedView style={{ flex: 1, padding: 15 }}>
      <ThemedView style={styles.container}>
        <TextInput
          placeholder="Search hymn..."
          value={query}
          onChangeText={setQuery}
          style={[styles.input, { color: textColor }]}
          placeholderTextColor={textColor}
        />
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={20} color="white" />
        </TouchableOpacity>
      </ThemedView>

      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.hymnItem, { backgroundColor }]}
            onPress={() => router.push({ pathname: "/hymn", params: { hymn: JSON.stringify(item) } })}
          >
            <ThemedText style={styles.hymnText}>
              {item.number}. {item.title[language as keyof typeof item.title]}
            </ThemedText>
          </TouchableOpacity>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    paddingLeft: 20,
    paddingRight: 5,
    marginVertical: 10,
    height: 55,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    outline: 'none',
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
    backgroundColor: '#4A00E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hymnItem: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  hymnText: {
    fontSize: 18,
  },
});
