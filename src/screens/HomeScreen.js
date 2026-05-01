import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  Linking,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';
import ExpertiseCard from '../components/ExpertiseCard';
import ContactButton from '../components/ContactButton';
import QrCodeCard from '../components/QrCodeCard';
import StatsCard from '../components/StatsCard';
import globalStyles from '../styles/globalStyles';
import { useNotification } from '../context/NotificationContext';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const { sendLocalNotification } = useNotification();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();

    sendLocalNotification(
      'Bienvenue sur AfricaSoft DEV',
      'Découvrez nos services et solutions digitales innovantes'
    );
  }, []);

  const handleWhatsApp = () => {
    Linking.openURL('https://wa.me/243854507945');
  };

  const handleEmail = () => {
    Linking.openURL('mailto:contact@africasoft.dev');
  };

  const handleCall = () => {
    Linking.openURL('tel:+243854507945');
  };

  const expertiseItems = [
    {
      icon: '🌐',
      title: 'Développement Web & Mobile',
      tags: ['Web Apps', 'Mobile Apps', 'API & Backend'],
      color: '#4A90E2',
      onPress: () => navigation.navigate('Services')
    },
    {
      icon: '🗄️',
      title: 'Optimisation SQL',
      tags: ['Performance', 'Sécurité', 'Scalabilité'],
      color: '#E67E22',
      onPress: () => navigation.navigate('Services')
    },
    {
      icon: '☁️',
      title: 'Hébergement & Cloud',
      tags: ['Rapide', 'Sécurisé', 'Évolutif'],
      color: '#27AE60',
      onPress: () => navigation.navigate('Services')
    }
  ];

  return (
    <ScrollView 
      style={globalStyles.container} 
      showsVerticalScrollIndicator={false}
    >
      <Header />
      
      <Animated.View 
        style={[
          globalStyles.contentHome,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }]
          }
        ]}
      >
        {/* Hero Title */}
        <View style={globalStyles.heroSection}>
          <Text style={globalStyles.heroTitle}>Services & Expertise</Text>
          <Text style={globalStyles.heroSubtitle}>
            Notre Expertise à Votre Service
          </Text>
          <Text style={globalStyles.heroDescription}>
            Des solutions sur mesure pour répondre à vos besoins digitaux.
          </Text>
        </View>

        {/* Expertise Grid */}
        <Text style={globalStyles.sectionTitleExpertise}>Notre Expertise</Text>
        <View style={globalStyles.expertiseGrid}>
          {expertiseItems.map((item, index) => (
            <ExpertiseCard key={index} {...item} />
          ))}
        </View>

        {/* QR Code Integration */}
        <QrCodeCard onPress={() => navigation.navigate('Services')} />

        {/* SQL & Cloud are already in expertise grid above */}

        {/* Stats Card */}
        <StatsCard />

        {/* Products Section */}
        <View style={globalStyles.productsPreview}>
          <Text style={globalStyles.sectionTitleExpertise}>Nos Solutions</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={globalStyles.productsScroll}
          >
            <TouchableOpacity 
              style={globalStyles.productPreviewCard}
              onPress={() => navigation.navigate('Products')}
            >
              <Text style={globalStyles.productPreviewIcon}>📦</Text>
              <Text style={globalStyles.productPreviewName}>EASYSTOCK</Text>
              <Text style={globalStyles.productPreviewDesc}>Gestion de Stock</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={globalStyles.productPreviewCard}
              onPress={() => navigation.navigate('Products')}
            >
              <Text style={globalStyles.productPreviewIcon}>🏥</Text>
              <Text style={globalStyles.productPreviewName}>EasyClinic</Text>
              <Text style={globalStyles.productPreviewDesc}>Solutions Médicales</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={globalStyles.productPreviewCard}
              onPress={() => navigation.navigate('Products')}
            >
              <Text style={globalStyles.productPreviewIcon}>📚</Text>
              <Text style={globalStyles.productPreviewName}>EASY SCHOOL</Text>
              <Text style={globalStyles.productPreviewDesc}>Systèmes Scolaires</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={globalStyles.productPreviewCard}
              onPress={() => navigation.navigate('Products')}
            >
              <Text style={globalStyles.productPreviewIcon}>📄</Text>
              <Text style={globalStyles.productPreviewName}>EasyFacture</Text>
              <Text style={globalStyles.productPreviewDesc}>Facturation</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Contact Section */}
        <View style={globalStyles.contactSectionHome}>
          <Text style={globalStyles.sectionTitleExpertise}>Nous Sommes Là Pour Vous Aider</Text>
          <Text style={globalStyles.contactHelperText}>
            Besoin d'assistance ou d'informations ? Contactez-nous facilement.
          </Text>
          
          <ContactButton
            onPress={handleWhatsApp}
            iconSymbol="💬"
            title="Chat WhatsApp"
            subtitle="Réponse rapide en ligne"
            backgroundColor="#25D366"
          />
          
          <ContactButton
            onPress={handleCall}
            iconSymbol="📞"
            title="Appel Direct"
            subtitle="+243 854 507 945"
            backgroundColor="#4A90E2"
          />

          <ContactButton
            onPress={handleEmail}
            iconSymbol="✉️"
            title="Envoyer un Email"
            subtitle="contact@africasoft.dev"
            backgroundColor="#D44638"
          />
        </View>

        <View style={globalStyles.footer}>
          <Text style={globalStyles.footerText}>
            © 2026 AfricaSoft DEV - Tous droits réservés
          </Text>
          <Text style={globalStyles.footerSubtext}>
            Solutions digitales pour l'Afrique
          </Text>
        </View>
      </Animated.View>
    </ScrollView>
  );
};

export default HomeScreen;