import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Top Header Section */}
      <View style={styles.header}>
        <Text style={styles.logoText}>GAINZ</Text>
        <Text style={styles.subText}>PROTEIN SHAKE</Text>
      </View>

      {/* Intro Section */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.introContainer}>
          <Text style={styles.introText}>
            Welcome to Gainz Protein Shake!{'\n'}
            {'\n'}
            Are you looking to boost your nutrition, enhance your workout recovery, or simply enjoy a delicious and healthy drink? You've come to the right place! At Gainz Protein Shake, we're passionate about helping you reach your health and fitness goals with our top-quality protein shakes.{'\n'}
            {'\n'}
            Packed with essential nutrients, our protein shakes are designed to provide you with the perfect balance of protein, vitamins, and minerals. Whether you're a fitness enthusiast, a busy professional, or someone who simply wants to stay healthy, our protein shakes are the ideal solution for your daily nutritional needs.{'\n'}
            {'\n'}
            Explore our wide range of flavors and formulations to find the perfect shake for you. From whey protein to plant-based options, we have something for everyone. Join our community of health-conscious individuals and start your journey to a healthier, stronger you today!{'\n'}
            {'\n'}
            Cheers to good health and great taste!
          </Text>
        </View>
      </ScrollView>


      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  logoText: {
    color: '#FF6347',
    fontSize: 36,
    fontWeight: 'bold',
  },
  subText: {
    color: '#ccc',
    fontSize: 18,
    fontWeight: '300',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },
  introContainer: {
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  introText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 24,
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  featuredImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: 'cover',
  },

});

export default Home;
