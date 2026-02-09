import React from 'react';
import { ScrollView, ScrollViewProps } from 'react-native';

interface ParallaxScrollViewProps extends ScrollViewProps {
  headerImage?: React.ReactNode;
}

export function ParallaxScrollView({ headerImage, children, ...rest }: ParallaxScrollViewProps) {
  return (
    <ScrollView {...rest}>
      {headerImage}
      {children}
    </ScrollView>
  );
}
