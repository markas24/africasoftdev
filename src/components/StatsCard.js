import React, { useEffect, useRef } from 'react';
import { View, Text, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import globalStyles from '../styles/globalStyles';

const StatsCard = () => {
  const stats = [
    { value: 5423, label: 'Utilisateurs Actifs', suffix: '+' },
    { value: 128, label: 'Projets Déposés', suffix: '+' },
    { value: 98, label: 'Satisfaction Client', suffix: '%' }
  ];

  const animations = stats.map(() => useRef(new Animated.Value(0)).current);

  useEffect(() => {
    stats.forEach((stat, index) => {
      Animated.timing(animations[index], {
        toValue: stat.value,
        duration: 1500,
        delay: index * 200,
        useNativeDriver: false,
      }).start();
    });
  }, []);

  const animatedValue = (index, suffix) => {
    if (suffix === '%') {
      return animations[index].interpolate({
        inputRange: [0, 100],
        outputRange: ['0', '100'],
      });
    }
    return animations[index].interpolate({
      inputRange: [0, 5423],
      outputRange: ['0', '5423'],
    });
  };

  return (
    <LinearGradient
      colors={['#0A2B3E', '#0D3B55']}
      style={globalStyles.statsCardNew}
    >
      <Text style={globalStyles.statsTitle}>Statistiques en Temps Réel</Text>
      <View style={globalStyles.statsContainerNew}>
        {stats.map((stat, index) => (
          <View key={index} style={globalStyles.statItemNew}>
            <Animated.Text style={globalStyles.statNumberNew}>
              {animatedValue(index, stat.suffix)}
              {stat.suffix}
            </Animated.Text>
            <Text style={globalStyles.statLabelNew}>{stat.label}</Text>
          </View>
        ))}
      </View>
    </LinearGradient>
  );
};

export default StatsCard;