import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
  FlatList,
  Animated,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';
import globalStyles from '../styles/globalStyles';

const { width } = Dimensions.get('window');

const achievements = [
  {
    id: '1',
    title: 'Plateforme E-learning',
    category: 'Web',
    description: 'Plateforme éducative complète pour l\'enseignement à distance avec Live streaming, quiz interactifs et suivi des performances.',
    client: 'Ministère de l\'Éducation',
    technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC'],
    image: 'https://via.placeholder.com/400x300',
    completionDate: '2024',
    highlights: [
      '1000+ utilisateurs actifs',
      '30% d\'augmentation des performances',
      'Interface responsive'
    ]
  },
  {
    id: '2',
    title: 'Application Mobile Banking',
    category: 'Android',
    description: 'Application mobile bancaire sécurisée avec authentification biométrique, transactions en temps réel et notifications push.',
    client: 'MicroFinance Africa',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Redux'],
    image: 'https://via.placeholder.com/400x300',
    completionDate: '2024',
    highlights: [
      '5000+ téléchargements',
      'Sécurité bancaire certifiée',
      'Paiements instantanés'
    ]
  },
  {
    id: '3',
    title: 'Service USSD Agricole',
    category: 'USSD',
    description: 'Service USSD permettant aux agriculteurs d\'accéder aux informations météorologiques, conseils agricoles et prix du marché.',
    client: 'MinAgri RDC',
    technologies: ['Node.js', 'MongoDB', 'USSD Gateway', 'Twilio'],
    image: 'https://via.placeholder.com/400x300',
    completionDate: '2023',
    highlights: [
      '50,000+ utilisateurs',
      'Disponible dans 10 provinces',
      'Service 24/7'
    ]
  },
  {
    id: '4',
    title: 'Plateforme de Gestion Hospitalière',
    category: 'Web',
    description: 'Solution complète de gestion pour hôpitaux incluant rendez-vous en ligne, dossiers patients, et facturation.',
    client: 'Clinique Ngaliema',
    technologies: ['React', 'Django', 'PostgreSQL', 'Docker'],
    image: 'https://via.placeholder.com/400x300',
    completionDate: '2024',
    highlights: [
      'Gestion de 500+ patients/jour',
      'PDF automatisé',
      'Support multilingue'
    ]
  },
  {
    id: '5',
    title: 'Application de Livraison',
    category: 'Android',
    description: 'Application de livraison à la demande avec géolocalisation, suivi en temps réel et paiement mobile.',
    client: 'QuickDelivery',
    technologies: ['React Native', 'Firebase', 'Google Maps API'],
    image: 'https://via.placeholder.com/400x300',
    completionDate: '2024',
    highlights: [
      '100+ livreurs actifs',
      'Temps de livraison réduit de 40%',
      '5000+ commandes'
    ]
  }
];

const AchievementsScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const fadeAnim = new Animated.Value(0);

  const categories = ['Tous', 'Web', 'Android', 'USSD'];

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const filteredProjects = selectedCategory === 'Tous'
    ? achievements
    : achievements.filter(project => project.category === selectedCategory);

  const renderProjectCard = ({ item, index }) => (
    <TouchableOpacity
      style={globalStyles.achievementCard}
      onPress={() => {
        setSelectedProject(item);
        setModalVisible(true);
      }}
      activeOpacity={0.9}
    >
      <LinearGradient
        colors={['#f8f9fa', '#ffffff']}
        style={globalStyles.achievementCardContent}
      >
        <View style={globalStyles.achievementHeader}>
          <View style={[globalStyles.achievementCategory, { backgroundColor: getCategoryColor(item.category) }]}>
            <Text style={globalStyles.achievementCategoryText}>{item.category}</Text>
          </View>
          <Text style={globalStyles.achievementDate}>{item.completionDate}</Text>
        </View>
        
        <Text style={globalStyles.achievementTitle}>{item.title}</Text>
        <Text style={globalStyles.achievementClient}>{item.client}</Text>
        <Text style={globalStyles.achievementDescription} numberOfLines={2}>
          {item.description}
        </Text>
        
        <View style={globalStyles.techStack}>
          {item.technologies.slice(0, 3).map((tech, idx) => (
            <View key={idx} style={globalStyles.techBadge}>
              <Text style={globalStyles.techText}>{tech}</Text>
            </View>
          ))}
          {item.technologies.length > 3 && (
            <Text style={globalStyles.moreTech}>+{item.technologies.length - 3}</Text>
          )}
        </View>
        
        <TouchableOpacity style={globalStyles.viewDetailsButton}>
          <Text style={globalStyles.viewDetailsText}>Voir détails →</Text>
        </TouchableOpacity>
      </LinearGradient>
    </TouchableOpacity>
  );

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Web': return '#4A90E2';
      case 'Android': return '#3DDC84';
      case 'USSD': return '#F39C12';
      default: return '#0A2B3E';
    }
  };

  return (
    <View style={globalStyles.container}>
      <Header title="Nos Réalisations" />
      
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        <View style={globalStyles.categoryContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                style={[
                  globalStyles.categoryButton,
                  selectedCategory === category && globalStyles.categoryButtonActive
                ]}
                onPress={() => setSelectedCategory(category)}
              >
                <Text style={[
                  globalStyles.categoryButtonText,
                  selectedCategory === category && globalStyles.categoryButtonTextActive
                ]}>
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <FlatList
          data={filteredProjects}
          renderItem={renderProjectCard}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={globalStyles.achievementsList}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
        />
      </Animated.View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={globalStyles.modalContainer}>
          <View style={globalStyles.modalContent}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {selectedProject && (
                <>
                  <View style={globalStyles.modalHeader}>
                    <Text style={globalStyles.modalTitle}>{selectedProject.title}</Text>
                    <TouchableOpacity
                      style={globalStyles.closeButton}
                      onPress={() => setModalVisible(false)}
                    >
                      <Text style={globalStyles.closeButtonText}>✕</Text>
                    </TouchableOpacity>
                  </View>
                  
                  <View style={[globalStyles.modalCategory, { backgroundColor: getCategoryColor(selectedProject.category) }]}>
                    <Text style={globalStyles.modalCategoryText}>{selectedProject.category}</Text>
                  </View>
                  
                  <Text style={globalStyles.modalClient}>Client: {selectedProject.client}</Text>
                  <Text style={globalStyles.modalDate}>Année: {selectedProject.completionDate}</Text>
                  
                  <Text style={globalStyles.modalDescription}>{selectedProject.description}</Text>
                  
                  <Text style={globalStyles.modalSubtitle}>Technologies utilisées:</Text>
                  <View style={globalStyles.modalTechContainer}>
                    {selectedProject.technologies.map((tech, idx) => (
                      <View key={idx} style={globalStyles.modalTechBadge}>
                        <Text style={globalStyles.modalTechText}>{tech}</Text>
                      </View>
                    ))}
                  </View>
                  
                  <Text style={globalStyles.modalSubtitle}>Points forts:</Text>
                  {selectedProject.highlights.map((highlight, idx) => (
                    <View key={idx} style={globalStyles.highlightItem}>
                      <Text style={globalStyles.highlightBullet}>✓</Text>
                      <Text style={globalStyles.highlightText}>{highlight}</Text>
                    </View>
                  ))}
                </>
              )}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AchievementsScreen;