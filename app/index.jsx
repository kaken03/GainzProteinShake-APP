import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
    <StatusBar backgroundColor="#FF6347" style="dark" />
    <ImageBackground
      source={require('../assets/hansy.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.overlay} />
      <View style={styles.container}>
        <View style={styles.textContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>GAINZ</Text>
          <Text style={styles.subtitle}>Protein Shake</Text>
          <Image
                source={require('../assets/images/protein.jpeg')}
                style={styles.image}
              />
          </View>
          <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
              Discover customized protein shakes that fit your goals and tastes. Whether you're looking to build muscle, lose weight, or simply stay healthy, GAINZ has you covered.</Text>
            </View>
            <Text style={styles.slogan}>"Fuel Your Gains, Shake Up Your Strength!"</Text>
          <Link style={styles.buttonText} href="/login">
                Get Started 
            </Link>
        </View>
      </View>
    </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1, 
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 200,
  },
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  textContainer: {
    alignItems: 'center',
    marginHorizontal: 25,
  },
  title: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#FF6347',
    textAlign: 'center',
    
  },
  subtitle: {
    fontSize: 30,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 30,
  },
  description: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  slogan: {
    fontSize: 16,
    fontWeight: '250',
    marginTop: 40,
    marginBottom: -60,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: '#FF6347', 
    borderRadius: 5,
    marginTop: 100,
  },
  descriptionContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.45)', // Dark background for better text contrast
    borderRadius: 10,
    padding: 15, // Max width to prevent overly wide text
  },
});