import React from 'react';
import { Linking, Pressable } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

export function ExternalLink({ href, children }: ExternalLinkProps) {
  const handlePress = async () => {
    const supported = await Linking.canOpenURL(href);

    if (supported) {
      await WebBrowser.openBrowserAsync(href);
    } else {
      console.warn(`Don't know how to open this URL: ${href}`);
    }
  };

  return (
    <Pressable onPress={handlePress}>
      {children}
    </Pressable>
  );
}
