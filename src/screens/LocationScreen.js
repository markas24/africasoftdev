import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Linking,
  Alert,
  Platform,
} from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';
import globalStyles from '../styles/globalStyles';

const { width, height } = Dimensions.get('window');

const LocationScreen = () => {
  // Coordonnées AfricaSoft DEV à Lubumbashi
  const [region, setRegion] = useState({
    latitude: -11.664444,
    longitude: 27.479444,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  });

  const officeLocation = {
    latitude: -11.664444,
    longitude: 27.479444,
    title: 'AfricaSoft DEV',
    description: 'Solutions digitales pour l\'Afrique',
    address: 'Lubumbashi, République Démocratique du Congo',
    phone: '+243 854 507 945',
    email: 'contact@africasoft.dev',
  };

  const openMaps = () => {
    const url = Platform.select({
      ios: `maps:0,0?q=${officeLocation.latitude},${officeLocation.longitude}`,
      android: `geo:0,0?q=${officeLocation.latitude},${officeLocation.longitude}(${officeLocation.title})`,
    });
    Linking.openURL(url).catch(() => {
      Alert.alert('Erreur', "Impossible d'ouvrir l'application de cartes");
    });
  };

  const getDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${officeLocation.latitude},${officeLocation.longitude}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Header title="Notre Localisation" />
      
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={setRegion}
      >
        <Marker
          coordinate={officeLocation}
          title={officeLocation.title}
          description={officeLocation.description}
          pinColor="#0A2B3E"
        >
          <Callout>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutTitle}>{officeLocation.title}</Text>
              <Text style={styles.calloutAddress}>{officeLocation.address}</Text>
              <TouchableOpacity onPress={getDirections} style={styles.calloutButton}>
                <Text style={styles.calloutButtonText}>Itinéraire →</Text>
              </TouchableOpacity>
            </View>
          </Callout>
        </Marker>
      </MapView>

      <LinearGradient
        colors={['rgba(10,43,62,0.95)', 'rgba(13,59,85,0.9)']}
        style={styles.infoPanel}
      >
        <Text style={styles.infoTitle}>AfricaSoft DEV</Text>
        <Text style={styles.infoAddress}>{officeLocation.address}</Text>
        
        <View style={styles.infoRow}>
          <TouchableOpacity style={styles.actionButton} onPress={getDirections}>
            <Text style={styles.actionIcon}>🗺️</Text>
            <Text style={styles.actionText}>Itinéraire</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.actionButton} 
            onPress={() => Linking.openURL(`tel:${officeLocation.phone}`)}
          >
            <Text style={styles.actionIcon}>📞</Text>
            <Text style={styles.actionText}>Appeler</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoDetails}>
          <TouchableOpacity 
            style={styles.detailItem}
            onPress={() => Linking.openURL(`mailto:${officeLocation.email}`)}
          >
            <Text style={styles.detailIcon}>✉️</Text>
            <Text style={styles.detailText}>{officeLocation.email}</Text>
          </TouchableOpacity>
          
          <View style={styles.detailItem}>
            <Text style={styles.detailIcon}>🕒</Text>
            <Text style={styles.detailText}>Lun - Ven : 9h00 - 18h00</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailIcon}>💬</Text>
            <Text style={styles.detailText}>WhatsApp : +243 854 507 945</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F8',
  },
  map: {
    width: width,
    height: height * 0.55,
  },
  calloutContainer: {
    width: 220,
    padding: 10,
  },
  calloutTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0A2B3E',
    marginBottom: 5,
  },
  calloutAddress: {
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
  },
  calloutButton: {
    backgroundColor: '#0A2B3E',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  calloutButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  infoPanel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  infoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  infoAddress: {
    fontSize: 14,
    color: '#e0e0e0',
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 12,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  actionIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  actionText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  infoDetails: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.2)',
    paddingTop: 15,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  detailText: {
    color: '#fff',
    fontSize: 13,
  },
});

export default LocationScreen;