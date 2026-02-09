import { View, Button } from "react-native";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function LanguageSwitcher() {
  const { changeLanguage } = useContext(LanguageContext);

  return (
    <View style={{ flexDirection: "row", gap: 5 }}>
      <Button title="EN" onPress={() => changeLanguage("en")} />
      <Button title="SN" onPress={() => changeLanguage("sn")} />
      <Button title="ND" onPress={() => changeLanguage("nd")} />
    </View>
  );
}
