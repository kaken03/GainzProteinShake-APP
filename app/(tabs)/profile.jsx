import React from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Implement logout logic here (e.g., clear user data, token)
    alert('Logged out');
    navigation.navigate('Home'); // Navigate to homepage after logout
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: 'https://example.com/profile-picture.jpg' }} // Placeholder for user profile picture
          style={styles.profileImage}
        />
        <Text style={styles.username}>Kaken</Text>
        <Text style={styles.email}>kentezekielvillahermosa@gmail.com</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Profile Information</Text>
        <Text style={styles.infoText}>Age: 20</Text>
        <Text style={styles.infoText}>Gender: Male</Text>
        <Text style={styles.infoText}>Location: Cebu City, Philippines</Text>
      </View>

      <View style={styles.linkSection}>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => navigation.navigate('addtocart')}
        >
          <Text style={styles.linkText}>View Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => navigation.navigate('checkout')} // Updated to correct screen name
        >
          <Text style={styles.linkText}>Ordered Items</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('index')}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    padding: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#CCCCCC',
  },
  infoSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#FF6347',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  linkSection: {
    marginBottom: 20,
  },
  linkButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  linkText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#D9534F',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Profile;
