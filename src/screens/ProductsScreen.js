import React, { useEffect, useRef } from 'react';
import { View, Text, ScrollView, Animated } from 'react-native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import globalStyles from '../styles/globalStyles';

const ProductsScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  const products = [
    {
      name: 'EASYSTOCK',
      description: 'Gérez vos stocks, produits et inventaires en temps réel.',
      icon: '📦',
    },
    {
      name: 'EasyClinic',
      description: 'Digitalisez votre clinique et améliorez vos soins.',
      icon: '🏥',
    },
    {
      name: 'EASY SCHOOL',
      description: 'Gérez écoles, élèves, notes et absences.',
      icon: '📚',
    },
    {
      name: 'EasyFacture',
      description: 'Créez, gérez et suivez vos factures facilement.',
      icon: '📄',
    }
  ];

  return (
    <ScrollView style={globalStyles.container}>
      <Header title="Nos Solutions" />
      
      <Animated.View style={[globalStyles.productsContainer, { opacity: fadeAnim }]}>
        <Text style={globalStyles.productsIntro}>
          Des solutions logicielles complètes pour votre entreprise
        </Text>
        
        <View style={globalStyles.productsGrid}>
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </View>

        <View style={globalStyles.productsCta}>
          <Text style={globalStyles.productsCtaTitle}>
            Une solution ne correspond pas à vos besoins ?
          </Text>
          <Text style={globalStyles.productsCtaText}>
            Nous développons des solutions sur mesure adaptées à votre activité.
          </Text>
        </View>
      </Animated.View>
    </ScrollView>
  );
};

export default ProductsScreen;