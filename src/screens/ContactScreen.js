import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Linking,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';
import globalStyles from '../styles/globalStyles';
import { useNotification } from '../context/NotificationContext';

const ContactScreen = () => {
  const { sendLocalNotification } = useNotification();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs obligatoires');
      return;
    }

    setLoading(true);
    
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        'Message envoyé',
        'Nous vous répondrons dans les plus brefs délais.',
        [{ text: 'OK', onPress: () => {
          setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
          sendLocalNotification('Nouveau message', `Merci ${formData.name}, nous vous contacterons bientôt!`);
        }}]
      );
    }, 1500);
  };

  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: 'https://facebook.com/africasoftt', color: '#1877F2' },
    { name: 'LinkedIn', icon: '🔗', url: 'https://linkedin.com/company/africasoftt', color: '#0077B5' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/africasoftt', color: '#1DA1F2' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com/africasoftt', color: '#E4405F' },
  ];

  const openSocial = (url) => {
    Linking.openURL(url).catch(() => {
      Alert.alert('Erreur', 'Impossible d\'ouvrir le lien');
    });
  };

  return (
    <ScrollView style={globalStyles.container}>
      <Header title="Contactez-nous" />
      
      <View style={globalStyles.contactFormContainer}>
        <LinearGradient
          colors={['#ffffff', '#f8f9fa']}
          style={globalStyles.formCard}
        >
          <Text style={globalStyles.formTitle}>Envoyez-nous un message</Text>
          
          <View style={globalStyles.inputGroup}>
            <Text style={globalStyles.inputLabel}>Nom complet *</Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Votre nom"
              value={formData.name}
              onChangeText={(text) => setFormData({...formData, name: text})}
            />
          </View>

          <View style={globalStyles.inputGroup}>
            <Text style={globalStyles.inputLabel}>Email *</Text>
            <TextInput
              style={globalStyles.input}
              placeholder="votre@email.com"
              keyboardType="email-address"
              value={formData.email}
              onChangeText={(text) => setFormData({...formData, email: text})}
            />
          </View>

          <View style={globalStyles.inputGroup}>
            <Text style={globalStyles.inputLabel}>Téléphone</Text>
            <TextInput
              style={globalStyles.input}
              placeholder="+243 XXX XXX XXX"
              keyboardType="phone-pad"
              value={formData.phone}
              onChangeText={(text) => setFormData({...formData, phone: text})}
            />
          </View>

          <View style={globalStyles.inputGroup}>
            <Text style={globalStyles.inputLabel}>Sujet</Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Sujet de votre message"
              value={formData.subject}
              onChangeText={(text) => setFormData({...formData, subject: text})}
            />
          </View>

          <View style={globalStyles.inputGroup}>
            <Text style={globalStyles.inputLabel}>Message *</Text>
            <TextInput
              style={[globalStyles.input, globalStyles.textArea]}
              placeholder="Votre message..."
              multiline
              numberOfLines={5}
              value={formData.message}
              onChangeText={(text) => setFormData({...formData, message: text})}
            />
          </View>

          <TouchableOpacity
            style={globalStyles.submitButton}
            onPress={handleSubmit}
            disabled={loading}
          >
            <LinearGradient
              colors={['#0A2B3E', '#0D3B55']}
              style={globalStyles.submitGradient}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={globalStyles.submitButtonText}>Envoyer le message</Text>
              )}
            </LinearGradient>
          </TouchableOpacity>
        </LinearGradient>

        <View style={globalStyles.socialSection}>
          <Text style={globalStyles.socialTitle}>Suivez-nous</Text>
          <View style={globalStyles.socialGrid}>
            {socialLinks.map((social, index) => (
              <TouchableOpacity
                key={index}
                style={[globalStyles.socialCard, { backgroundColor: social.color }]}
                onPress={() => openSocial(social.url)}
              >
                <Text style={globalStyles.socialIcon}>{social.icon}</Text>
                <Text style={globalStyles.socialName}>{social.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={globalStyles.contactInfoCard}>
          <Text style={globalStyles.contactInfoTitle}>Informations de contact</Text>
          
          <TouchableOpacity style={globalStyles.infoItem} onPress={() => Linking.openURL('tel:+243854507945')}>
            <Text style={globalStyles.infoIcon}>📞</Text>
            <View>
              <Text style={globalStyles.infoLabel}>Téléphone</Text>
              <Text style={globalStyles.infoValue}>+243 854 507 945</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={globalStyles.infoItem} onPress={() => Linking.openURL('mailto:contact@africasoft.dev')}>
            <Text style={globalStyles.infoIcon}>✉️</Text>
            <View>
              <Text style={globalStyles.infoLabel}>Email</Text>
              <Text style={globalStyles.infoValue}>contact@africasoft.dev</Text>
            </View>
          </TouchableOpacity>
          
          <View style={globalStyles.infoItem}>
            <Text style={globalStyles.infoIcon}>🕒</Text>
            <View>
              <Text style={globalStyles.infoLabel}>Horaires</Text>
              <Text style={globalStyles.infoValue}>Lun - Ven: 9h - 18h</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ContactScreen;