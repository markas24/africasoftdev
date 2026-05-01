import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';
import globalStyles from '../styles/globalStyles';

const ProjectDetailScreen = ({ route, navigation }) => {
  const { project } = route.params;

  return (
    <ScrollView style={globalStyles.container}>
      <Header title={project.title} showBackButton onBackPress={() => navigation.goBack()} />
      
      <View style={globalStyles.projectDetailContainer}>
        <LinearGradient
          colors={['#ffffff', '#f8f9fa']}
          style={globalStyles.projectDetailCard}
        >
          <View style={globalStyles.projectDetailHeader}>
            <View style={[globalStyles.projectDetailCategory, { backgroundColor: getCategoryColor(project.category) }]}>
              <Text style={globalStyles.projectDetailCategoryText}>{project.category}</Text>
            </View>
            <Text style={globalStyles.projectDetailClient}>Client: {project.client}</Text>
            <Text style={globalStyles.projectDetailDate}>Année: {project.completionDate}</Text>
          </View>

          <Text style={globalStyles.projectDetailDescription}>{project.description}</Text>

          <Text style={globalStyles.projectDetailSubtitle}>Technologies</Text>
          <View style={globalStyles.projectDetailTechContainer}>
            {project.technologies.map((tech, idx) => (
              <View key={idx} style={globalStyles.projectDetailTechBadge}>
                <Text style={globalStyles.projectDetailTechText}>{tech}</Text>
              </View>
            ))}
          </View>

          <Text style={globalStyles.projectDetailSubtitle}>Points forts</Text>
          {project.highlights.map((highlight, idx) => (
            <View key={idx} style={globalStyles.projectDetailHighlight}>
              <Text style={globalStyles.projectDetailBullet}>✓</Text>
              <Text style={globalStyles.projectDetailHighlightText}>{highlight}</Text>
            </View>
          ))}

          <TouchableOpacity
            style={globalStyles.contactProjectButton}
            onPress={() => {
              navigation.navigate('Contact');
              navigation.navigate('MainTabs', { screen: 'Contact' });
            }}
          >
            <LinearGradient
              colors={['#0A2B3E', '#0D3B55']}
              style={globalStyles.contactProjectGradient}
            >
              <Text style={globalStyles.contactProjectText}>Demander un projet similaire</Text>
            </LinearGradient>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

const getCategoryColor = (category) => {
  switch(category) {
    case 'Web': return '#4A90E2';
    case 'Android': return '#3DDC84';
    case 'USSD': return '#F39C12';
    default: return '#0A2B3E';
  }
};

export default ProjectDetailScreen;