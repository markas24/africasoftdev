import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import globalStyles from '../styles/globalStyles';

const ExpertiseCard = ({ icon, title, tags, color, onPress }) => {
  return (
    <TouchableOpacity 
      style={globalStyles.expertiseCard} 
      onPress={onPress}
      activeOpacity={0.9}
    >
      <LinearGradient
        colors={[color + '20', color + '05']}
        style={globalStyles.expertiseCardInner}
      >
        <View style={[globalStyles.expertiseIconContainer, { backgroundColor: color }]}>
          <Text style={globalStyles.expertiseIcon}>{icon}</Text>
        </View>
        <Text style={globalStyles.expertiseTitle}>{title}</Text>
        <View style={globalStyles.expertiseTagsContainer}>
          {tags.map((tag, idx) => (
            <View key={idx} style={[globalStyles.expertiseTag, { borderColor: color }]}>
              <Text style={[globalStyles.expertiseTagText, { color: color }]}>{tag}</Text>
            </View>
          ))}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ExpertiseCard;