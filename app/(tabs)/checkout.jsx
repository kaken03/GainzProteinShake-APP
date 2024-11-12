import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const sampleOrderedItems = [
  {
    id: '1',
    name: 'Paleo Iced Coffee Protein',
    quantity: 2,
    price: 53.98,
    shipped: true,
    deliveryDate: '2024-09-25',
  },
  {
    id: '2',
    name: 'Plant-Based Protein - Chocolate',
    quantity: 1,
    price: 38.99,
    shipped: false,
    deliveryDate: '2024-10-01',
  },
];

const OrderedItemsPage = () => {
  const navigation = useNavigation(); // Define navigation here
  const [orderedItems, setOrderedItems] = useState(sampleOrderedItems);

  const calculateTotal = () => {
    return orderedItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleReorder = () => {
    // Implement reorder logic here
    alert('Reordering items...');
  };

  const renderItem = ({ item }) => (
    <View style={styles.orderItem}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDetails}>Quantity: {item.quantity}</Text>
      <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
      <Text style={styles.shipmentStatus}>
        Status: {item.shipped ? 'Shipped' : 'Pending Shipment'}
      </Text>
      <Text style={styles.deliveryDate}>
        Estimated Delivery: {item.deliveryDate}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ordered Items</Text>

      <FlatList
        data={orderedItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      <View style={styles.footer}>
        <Text style={styles.total}>Total: ${calculateTotal()}</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('product')}>
          <Text style={styles.buttonText}>Reorder Items</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('home')}>
          <Text style={styles.buttonText}>Go to Home</Text>
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
  orderItem: {
    backgroundColor: '#333',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  itemName: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  itemDetails: {
    fontSize: 14,
    color: '#CCCCCC',
  },
  itemPrice: {
    fontSize: 16,
    color: '#FF6347',
    marginTop: 5,
  },
  shipmentStatus: {
    fontSize: 14,
    color: '#FFFF00',
    marginTop: 5,
  },
  deliveryDate: {
    fontSize: 14,
    color: '#A9A9A9',
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
    marginTop: 10, // Add some space between buttons
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OrderedItemsPage;
