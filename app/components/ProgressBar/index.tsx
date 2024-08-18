import React from 'react';
import { View, Animated } from 'react-native';
import styles from './ProgressBar.styles';

type ProgressBarProps = {
  progress: Animated.Value;
  totalSteps: number;
};

export default function ProgressBar({ progress, totalSteps }: ProgressBarProps) {
  const progressAnimation = progress.interpolate({
    inputRange: [0, totalSteps],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container} testID="progress-bar">
      <Animated.View style={[styles.progress, { width: progressAnimation }]} />
    </View>
  );
}
