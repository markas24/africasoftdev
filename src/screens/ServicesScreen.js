import React, { useEffect, useRef } from 'react';
import { View, Text, ScrollView, Animated } from 'react-native';
import Header from '../components/Header';
import ExpertiseCard from '../components/ExpertiseCard';
import QrCodeCard from '../components/QrCodeCard';
import globalStyles from '../styles/globalStyles';

const ServicesScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  const servicesDetails = [
    {
      icon: '🌐',
      title: 'Développement Web & Mobile',
      tags: ['Web Apps', 'Mobile Apps', 'API & Backend'],
      color: '#4A90E2',
    },
    {
      icon: '📱◆',
      title: 'Intégration QR Code',
      tags: ['Scan', 'Automatisation', 'Connexion'],
      color: '#9B59B6',
    },
    {
      icon: '🗄️',
      title: 'Optimisation SQL',
      tags: ['Performance', 'Sécurité', 'Requêtes'],
      color: '#E67E22',
    },
    {
      icon: '☁️',
      title: 'Hébergement & Cloud',
      tags: ['Rapide', 'Sécurisé', 'Évolutif'],
      color: '#27AE60',
    }
  ];

  return (
    <ScrollView style={globalStyles.container}>
      <Header title="Nos Services" />
      
      <Animated.View style={[globalStyles.servicesContainer, { opacity: fadeAnim }]}>
        <Text style={globalStyles.servicesIntro}>
          Découvrez l'étendue de notre expertise technique
        </Text>
        
        <View style={globalStyles.expertiseGridFull}>
          {servicesDetails.map((service, index) => (
            <ExpertiseCard key={index} {...service} />
          ))}
        </View>

        <View style={globalStyles.serviceDetailSection}>
          <Text style={globalStyles.sectionTitleExpertise}>Pourquoi nous choisir ?</Text>
          <View style={globalStyles.serviceFeature}>
            <Text style={globalStyles.serviceFeatureIcon}>✓</Text>
            <Text style={globalStyles.serviceFeatureText}>Solutions sur mesure et évolutives</Text>
          </View>
          <View style={globalStyles.serviceFeature}>
            <Text style={globalStyles.serviceFeatureIcon}>✓</Text>
            <Text style={globalStyles.serviceFeatureText}>Sécurité et performance garanties</Text>
          </View>
          <View style={globalStyles.serviceFeature}>
            <Text style={globalStyles.serviceFeatureIcon}>✓</Text>
            <Text style={globalStyles.serviceFeatureText}>Support technique réactif</Text>
          </View>
          <View style={globalStyles.serviceFeature}>
            <Text style={globalStyles.serviceFeatureIcon}>✓</Text>
            <Text style={globalStyles.serviceFeatureText}>Tarifs compétitifs</Text>
          </View>
        </View>
      </Animated.View>
    </ScrollView>
  );
};

export default ServicesScreen;