import { useContext } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { FavoritesContext } from "../context/FavoriteContext";
import { LanguageContext } from "../context/LanguageContext";
import { hymns } from "../data/hymn";

export default function FavoritesScreen({ navigation }) {
  const { favorites } = useContext(FavoritesContext);
  const { language } = useContext(LanguageContext);

  const favHymns = hymns.filter(h => favorites.includes(h.id));

  return (
    <View style={{ flex: 1, padding: 15 }}>
      <FlatList
        data={favHymns}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Hymn", { hymn: item })}
          >
            <Text style={{ fontSize: 18 }}>
              {item.number}. {item.title[language]}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
