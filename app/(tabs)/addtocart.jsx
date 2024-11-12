import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';

const sampleCartItems = [
  { id: '1', name: 'Salted Caramel Protein Shake', quantity: 2, price: 29.99, image: 'https://www.garagegymreviews.com/wp-content/uploads/Salted-Caramel-Protein-Shake.png' },
  { id: '2', name: 'Kefir Smoothie', quantity: 1, price: 34.99, image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/09/banana-date-hemp-kefir-smoothie.jpg?resize=640,468&quality=82&strip=all' },
  { id: '3', name: 'Plant-Based Blueberry Orange Smoothie', quantity: 2, price: 38.99, image: 'https://www.garagegymreviews.com/wp-content/uploads/Protein-Shake-Potential-Images.png' },
  { id: '4', name: 'Chocolate Hazelnut Smoothie', quantity: 5, price: 28.99, image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2019/12/chocolate-hazelnut-smoothie.jpg?resize=640,468&quality=82&strip=all' },
  { id: '5', name: 'Paleo Iced Coffee Protein Shake', quantity: 3, price: 26.99, image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2022/09/Iced-coffee-protein.jpg?resize=640,468&quality=82&strip=all' },
];

const AddToCart = () => {
  const [cartItems, setCartItems] = useState(sampleCartItems);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    alert('Thank you for your order');
  };

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      <View style={styles.footer}>
        <Text style={styles.total}>Total: ${calculateTotal()}</Text>
        <TouchableOpacity style={styles.button} onPress={handleCheckout}>
          <Text style={styles.buttonText}>Order Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6347',
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#333',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  itemQuantity: {
    fontSize: 14,
    color: '#CCCCCC',
  },
  itemPrice: {
    fontSize: 16,
    color: '#FF6347',
    marginTop: 5,
  },
  footer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#444',
    paddingTop: 10,
  },
  total: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FF6347',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddToCart;
