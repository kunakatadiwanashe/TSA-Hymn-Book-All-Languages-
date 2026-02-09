import { Slot } from 'expo-router';
import { FavoritesProvider } from '../context/FavoriteContext';
import { LanguageProvider } from '../context/LanguageContext';

export default function RootLayout() {
  return (
    <LanguageProvider>
      <FavoritesProvider>
        <Slot />
      </FavoritesProvider>
    </LanguageProvider>
  );
}
