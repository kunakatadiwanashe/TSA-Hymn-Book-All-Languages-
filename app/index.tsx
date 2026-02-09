import { View, Text, FlatList, TextInput, TouchableOpacity } from "react-native";
import { useContext, useState } from "react";
import { router } from "expo-router";
import { hymns } from "../data/hymn";
import { LanguageContext } from "../context/LanguageContext";
import LanguageSwitcher from "../components/LanguageSwitcher";

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
    <View style={{ padding: 15 }}>
      <LanguageSwitcher />
      <TouchableOpacity
        onPress={() => router.push("/favorites")}
        style={{ marginVertical: 10, padding: 10, backgroundColor: '#ddd', borderRadius: 5 }}
      >
        <Text style={{ fontSize: 18, textAlign: 'center' }}>
          {language === 'en' ? 'Favorites' : language === 'sn' ? 'Zvandinofarira' : 'Othandiweyo'}
        </Text>
      </TouchableOpacity>
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
