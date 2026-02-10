import { useLocalSearchParams } from "expo-router";
import { useContext } from "react";
import { Button, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { FavoritesContext } from "../context/FavoriteContext";
import { LanguageContext } from "../context/LanguageContext";
import { Ionicons } from "@expo/vector-icons";

export default function HymnScreen() {
  const params = useLocalSearchParams();
  const hymn = JSON.parse(params.hymn as string);
  const { language } = useContext(LanguageContext)!;
  const { favorites, toggleFavorite } = useContext(FavoritesContext)!;

  const isFav = favorites.includes(hymn.id);

  return (
    <ScrollView style={{ flex: 1, padding: 15 }}>

      <View style={{ flex: 1, }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>
          {hymn.number}. {hymn.title[language]}
        </Text>

        <TouchableOpacity onPress={() => toggleFavorite(hymn.id)}>
          <Ionicons
            name={isFav ? "heart" : "heart-outline"}
            size={28}
            color={isFav ? "red" : "#555"}
          />
        </TouchableOpacity>
      </View>

      <Text style={{ fontSize: 18, marginTop: 15 }}>
        {hymn.lyrics[language]}
      </Text>
    </ScrollView>
  );
}
