import React from 'react';
import { Pressable, PressableProps } from 'react-native';
import * as Haptics from 'expo-haptics';

interface HapticTabProps extends PressableProps {
  onPress?: () => void;
}

export function HapticTab({ onPress, ...props }: HapticTabProps) {
  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress?.();
  };

  return <Pressable onPress={handlePress} {...props} />;
}
