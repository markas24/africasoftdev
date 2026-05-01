import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import globalStyles from '../styles/globalStyles';

const QrCodeCard = ({ onPress }) => {
  return (
    <TouchableOpacity 
      style={globalStyles.qrCard}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <LinearGradient
        colors={['#0A2B3E', '#0D3B55']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={globalStyles.qrCardInner}
      >
        <View style={globalStyles.qrIconContainer}>
          <Text style={globalStyles.qrIcon}>📱◆</Text>
        </View>
        <View style={globalStyles.qrContent}>
          <Text style={globalStyles.qrTitle}>Intégration QR Code</Text>
          <Text style={globalStyles.qrDescription}>
            Connectez, automatisez et simplifiez vos processus
          </Text>
        </View>
        <Text style={globalStyles.qrArrow}>→</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default QrCodeCard;