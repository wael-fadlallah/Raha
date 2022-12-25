import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface ProgressBarProps {
  currentTime: number;
  fullLength: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({currentTime, fullLength}) => {
  const progressPercentage = (currentTime / fullLength) * 100;

  return (
    <View style={styles.container}>
      <View style={{...styles.progress, width: `${progressPercentage}%`}} />
      <Text style={styles.text}>{`${progressPercentage.toFixed(1)}%`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 20,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#DDD',
  },
  progress: {
    height: '100%',
    backgroundColor: '#333',
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 14,
  },
});

export default ProgressBar;
