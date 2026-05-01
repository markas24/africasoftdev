import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F8',
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingBottom: 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  companyName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  tagline: {
    fontSize: 16,
    color: '#E0E0E0',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: -20,
  },
  statsCard: {
    borderRadius: 20,
    marginBottom: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#e0e0e0',
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  descriptionSection: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0A2B3E',
    marginBottom: 15,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    textAlign: 'justify',
    marginBottom: 15,
  },
  learnMoreButton: {
    alignSelf: 'flex-start',
  },
  learnMoreText: {
    color: '#0A2B3E',
    fontSize: 14,
    fontWeight: 'bold',
  },
  servicesSection: {
    marginBottom: 20,
  },
  serviceCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  serviceIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  serviceIconText: {
    fontSize: 30,
    color: '#fff',
  },
  serviceContent: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0A2B3E',
    marginBottom: 5,
  },
  serviceDescription: {
    fontSize: 14,
    color: '#777',
    lineHeight: 20,
  },
  contactSection: {
    marginBottom: 20,
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  contactIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  contactIconText: {
    fontSize: 28,
    color: '#fff',
  },
  contactTextContainer: {
    flex: 1,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 3,
  },
  contactSubtitle: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
  },
  footer: {
    paddingVertical: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  footerText: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
  },
  footerSubtext: {
    fontSize: 10,
    color: '#bbb',
    marginTop: 5,
  },
  
  // Achievements styles
  achievementsList: {
    padding: 16,
  },
  achievementCard: {
    width: '48%',
    marginBottom: 16,
  },
  achievementCardContent: {
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  achievementHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  achievementCategory: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  achievementCategoryText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  achievementDate: {
    fontSize: 10,
    color: '#999',
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0A2B3E',
    marginBottom: 4,
  },
  achievementClient: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  achievementDescription: {
    fontSize: 12,
    color: '#777',
    lineHeight: 16,
    marginBottom: 10,
  },
  techStack: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  techBadge: {
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 4,
    marginBottom: 4,
  },
  techText: {
    fontSize: 8,
    color: '#333',
  },
  moreTech: {
    fontSize: 8,
    color: '#999',
    alignSelf: 'center',
  },
  viewDetailsButton: {
    alignSelf: 'flex-start',
  },
  viewDetailsText: {
    fontSize: 12,
    color: '#0A2B3E',
    fontWeight: 'bold',
  },
  categoryContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 8,
  },
  categoryButtonActive: {
    backgroundColor: '#0A2B3E',
  },
  categoryButtonText: {
    fontSize: 14,
    color: '#666',
  },
  categoryButtonTextActive: {
    color: '#fff',
  },
  
  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0A2B3E',
    flex: 1,
  },
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    fontSize: 24,
    color: '#999',
  },
  modalCategory: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 8,
    marginBottom: 10,
  },
  modalCategoryText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  modalClient: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  modalDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  modalDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: '#555',
    marginBottom: 15,
  },
  modalSubtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0A2B3E',
    marginBottom: 10,
  },
  modalTechContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  modalTechBadge: {
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  modalTechText: {
    fontSize: 12,
    color: '#333',
  },
  highlightItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  highlightBullet: {
    fontSize: 16,
    color: '#4CAF50',
    marginRight: 8,
  },
  highlightText: {
    fontSize: 14,
    color: '#555',
    flex: 1,
  },
  
  // Contact form styles
  contactFormContainer: {
    padding: 16,
  },
  formCard: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0A2B3E',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: '#333',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  submitGradient: {
    padding: 15,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialSection: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  socialTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0A2B3E',
    marginBottom: 15,
    textAlign: 'center',
  },
  socialGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  socialCard: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  socialIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  socialName: {
    color: '#fff',
    fontWeight: 'bold',
  },
  contactInfoCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  contactInfoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0A2B3E',
    marginBottom: 15,
    textAlign: 'center',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  infoIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  infoLabel: {
    fontSize: 12,
    color: '#999',
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  
  // Project detail styles
  projectDetailContainer: {
    padding: 16,
  },
  projectDetailCard: {
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  projectDetailHeader: {
    marginBottom: 20,
  },
  projectDetailCategory: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 8,
    marginBottom: 10,
  },
  projectDetailCategoryText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  projectDetailClient: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  projectDetailDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  projectDetailDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: '#555',
    marginBottom: 20,
  },
  projectDetailSubtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0A2B3E',
    marginBottom: 10,
  },
  projectDetailTechContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  projectDetailTechBadge: {
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  projectDetailTechText: {
    fontSize: 12,
    color: '#333',
  },
  projectDetailHighlight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  projectDetailBullet: {
    fontSize: 16,
    color: '#4CAF50',
    marginRight: 8,
  },
  projectDetailHighlightText: {
    fontSize: 14,
    color: '#555',
    flex: 1,
  },
  contactProjectButton: {
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  contactProjectGradient: {
    padding: 15,
    alignItems: 'center',
  },
  contactProjectText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // ============================================
  // NOUVEAUX STYLES POUR LE DESIGN MODERNE
  // ============================================

  // Home Screen - Nouveaux styles
  contentHome: {
    paddingHorizontal: 16,
    paddingTop: 5,
  },

  heroSection: {
    marginBottom: 25,
    marginTop: 10,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0A2B3E',
    textAlign: 'center',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#4A90E2',
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: '500',
  },
  heroDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },

  sectionTitleExpertise: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0A2B3E',
    marginBottom: 15,
    textAlign: 'center',
  },

  // Expertise Grid
  expertiseGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  expertiseGridFull: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  // Expertise Card
  expertiseCard: {
    width: '48%',
    marginBottom: 15,
    borderRadius: 16,
    overflow: 'hidden',
  },
  expertiseCardInner: {
    padding: 15,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  expertiseIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  expertiseIcon: {
    fontSize: 24,
    color: '#fff',
  },
  expertiseTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0A2B3E',
    marginBottom: 8,
  },
  expertiseTagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  expertiseTag: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 6,
    marginBottom: 4,
  },
  expertiseTagText: {
    fontSize: 9,
    fontWeight: '500',
  },

  // QR Code Card
  qrCard: {
    marginBottom: 20,
    borderRadius: 16,
    overflow: 'hidden',
  },
  qrCardInner: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
  },
  qrIconContainer: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  qrIcon: {
    fontSize: 28,
    color: '#fff',
  },
  qrContent: {
    flex: 1,
  },
  qrTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  qrDescription: {
    fontSize: 12,
    color: '#e0e0e0',
  },
  qrArrow: {
    fontSize: 20,
    color: '#fff',
    opacity: 0.7,
  },

  // Stats Card New
  statsCardNew: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 15,
  },
  statsContainerNew: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItemNew: {
    alignItems: 'center',
  },
  statNumberNew: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F39C12',
    marginBottom: 5,
  },
  statLabelNew: {
    fontSize: 11,
    color: '#e0e0e0',
    textAlign: 'center',
  },

  // Products Preview
  productsPreview: {
    marginBottom: 20,
  },
  productsScroll: {
    flexDirection: 'row',
  },
  productPreviewCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginRight: 12,
    alignItems: 'center',
    width: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productPreviewIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  productPreviewName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0A2B3E',
    textAlign: 'center',
    marginBottom: 2,
  },
  productPreviewDesc: {
    fontSize: 10,
    color: '#888',
    textAlign: 'center',
  },

  // Contact Section Home
  contactSectionHome: {
    marginBottom: 20,
    marginTop: 10,
  },
  contactHelperText: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
    marginBottom: 15,
  },

  // Product Card (pour ProductsScreen)
  productCard: {
    width: '48%',
    marginBottom: 15,
    borderRadius: 16,
    overflow: 'hidden',
  },
  productCardInner: {
    padding: 15,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    alignItems: 'center',
  },
  productIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#0A2B3E10',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  productIcon: {
    fontSize: 32,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0A2B3E',
    marginBottom: 6,
    textAlign: 'center',
  },
  productDescription: {
    fontSize: 11,
    color: '#777',
    textAlign: 'center',
    marginBottom: 10,
    lineHeight: 15,
  },
  productArrow: {
    marginTop: 5,
  },
  productArrowText: {
    fontSize: 14,
    color: '#4A90E2',
  },

  // Services Screen
  servicesContainer: {
    padding: 16,
  },
  servicesIntro: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  serviceDetailSection: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  serviceFeature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  serviceFeatureIcon: {
    fontSize: 18,
    color: '#4CAF50',
    marginRight: 10,
    fontWeight: 'bold',
  },
  serviceFeatureText: {
    fontSize: 14,
    color: '#555',
    flex: 1,
  },

  // Products Screen
  productsContainer: {
    padding: 16,
  },
  productsIntro: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  productsCta: {
    backgroundColor: '#0A2B3E',
    borderRadius: 16,
    padding: 20,
    marginTop: 10,
  },
  productsCtaTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
  },
  productsCtaText: {
    fontSize: 13,
    color: '#e0e0e0',
    textAlign: 'center',
    lineHeight: 18,
  },
});