import { useLocalSearchParams } from "expo-router";
import { useContext } from "react";
import { Button, ScrollView, Text } from "react-native";
import { FavoritesContext } from "../context/FavoriteContext";
import { LanguageContext } from "../context/LanguageContext";

export default function HymnScreen() {
  const params = useLocalSearchParams();
  const hymn = JSON.parse(params.hymn as string);
  const { language } = useContext(LanguageContext)!;
  const { favorites, toggleFavorite } = useContext(FavoritesContext)!;

  const isFav = favorites.includes(hymn.id);

  return (
    <ScrollView style={{ padding: 15 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>
        {hymn.number}. {hymn.title[language]}
      </Text>

      <Button
        title={isFav ? "Remove Favorite" : "Add to Favorites"}
        onPress={() => toggleFavorite(hymn.id)}
      />

      <Text style={{ fontSize: 18, marginTop: 15 }}>
        {hymn.lyrics[language]}
      </Text>
    </ScrollView>
  );
}
