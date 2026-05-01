import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import globalStyles from '../styles/globalStyles';

const ProductCard = ({ name, description, icon, onPress }) => {
  return (
    <TouchableOpacity 
      style={globalStyles.productCard} 
      onPress={onPress}
      activeOpacity={0.9}
    >
      <LinearGradient
        colors={['#ffffff', '#f8f9fa']}
        style={globalStyles.productCardInner}
      >
        <View style={globalStyles.productIconContainer}>
          <Text style={globalStyles.productIcon}>{icon}</Text>
        </View>
        <Text style={globalStyles.productName}>{name}</Text>
        <Text style={globalStyles.productDescription}>{description}</Text>
        <View style={globalStyles.productArrow}>
          <Text style={globalStyles.productArrowText}>→</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ProductCard;