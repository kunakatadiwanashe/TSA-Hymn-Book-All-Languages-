import { router } from "expo-router";
import { useContext, useState } from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { LanguageContext } from "../context/LanguageContext";
import { hymns } from "../data/hymn";
import { Ionicons } from '@expo/vector-icons';

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

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <LanguageSwitcher />
        <TouchableOpacity
          onPress={() => router.push("/favorites")}
          style={{
            marginVertical: 10,
            padding: 10,
            alignSelf: 'center'
          }}
        >
          <Ionicons name="heart-outline" size={28} color="red" />
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder="Search hymn..."
        value={query}
        onChangeText={setQuery}
        style={{ borderWidth: 1, marginVertical: 10, padding: 8 }}
      />

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
