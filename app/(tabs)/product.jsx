import React, { useState } from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const Home = () => {
  const [isCutMode, setIsCutMode] = useState(false); // State to toggle between Bulking and Cut

  // Handler functions
  const handleAddToCart = (shakeName) => {
    console.log(`${shakeName} added to cart.`);
  };

  const handleOrder = (shakeName) => {
    console.log(`Order placed for ${shakeName}.`);
  };

  return (
    <View style={styles.container}>
      {/* Top Header Section */}
      <View style={styles.header}>
        <Text style={styles.logoText}>GAINZ</Text>
        <Text style={styles.subText}>PROTEIN SHAKE</Text>
      </View>
      {/* Toggle Bulking/Cut Section */}
      <View style={styles.toggleSection}>
        <TouchableOpacity
          style={!isCutMode ? styles.toggleButtonActive : styles.toggleButtonInactive}
          onPress={() => setIsCutMode(false)} // Set to Bulking
        >
          <Text style={styles.toggleText}>BULKING</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={isCutMode ? styles.toggleButtonActive : styles.toggleButtonInactive}
          onPress={() => setIsCutMode(true)} // Set to Cut
        >
          <Text style={styles.toggleText}>CUT</Text>
        </TouchableOpacity>
      </View>
      {/* Conditional Content Section */}
      <ScrollView contentContainerStyle={styles.productList}>
        {isCutMode ? (
          // CUT Mode Products
          <>
            <View style={styles.productItem}>
              <Image
                source={{ uri: 'https://www.eatthis.com/wp-content/uploads/sites/4/2019/12/chocolate-hazelnut-smoothie.jpg?resize=640,468&quality=82&strip=all' }}
                style={styles.productImage}
              />
              <Text style={styles.productTitle}>Chocolate Hazelnut Smoothie</Text>
              <Text style={styles.productDescription}>Indulge in the rich, creamy delight of our Chocolate Hazelnut Smoothie. Blending almond milk, luscious hazelnut butter, and velvety cocoa powder, this smoothie is a delicious treat packed with protein. Perfect for a post-workout refuel or a sweet, satisfying snack!</Text>
              <Text style={styles.productIngredients}>Ingredients: 1/4 cup cauliflower rice, 
1 frozen banana,
1 scoop Four Sigmatic Superfood Protein,
1/2 cup ice cubes,
1 cup Pacific Foods Hazelnut Chocolate Plant-Based Beverage.</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.addButton} onPress={() => handleAddToCart('Chocolate Hazelnut Smoothie')}>
                  <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.orderButton} onPress={() => handleOrder('Chocolate Hazelnut Smoothie')}>
                  <Text style={styles.buttonText}>Order</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.productItem}>
              <Image
                source={{ uri: 'https://www.eatthis.com/wp-content/uploads/sites/4/2022/09/Iced-coffee-protein.jpg?resize=640,468&quality=82&strip=all' }}
                style={styles.productImage}
              />
              <Text style={styles.productTitle}>Paleo Iced Coffee Protein Shake</Text>
              <Text style={styles.productDescription}>Kickstart your day with our Paleo Iced Coffee Protein Shake. This energizing blend features cold brew coffee, creamy almond milk, and coconut cream, delivering a refreshing boost of protein and flavor. Perfect for those following a paleo lifestyle, it’s the ultimate pick-me-up any time of day!</Text>
              <Text style={styles.productIngredients}>Ingredients: 2 Tbsp paleo vanilla or plain protein powder,
1 cup cashew milk,
1 shot espresso,
1/2 Medjool date,
Ice.</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.addButton} onPress={() => handleAddToCart('Paleo Iced Coffee Protein Shake')}>
                  <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.orderButton} onPress={() => handleOrder('Paleo Iced Coffee Protein Shake')}>
                  <Text style={styles.buttonText}>Order</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.productItem}>
              <Image
                source={{ uri: 'https://www.eatthis.com/wp-content/uploads/sites/4/2019/10/blueberry-smoothie.jpg?resize=640,468&quality=82&strip=all' }}
                style={styles.productImage}
              />
              <Text style={styles.productTitle}>Meal-Replacement Paleo Protein Shake</Text>
              <Text style={styles.productDescription}>Stay satisfied and energized with our Meal-Replacement Paleo Protein Shake. Packed with blueberries, almond butter, and nutrient-rich protein, this creamy shake offers a delicious and convenient way to fuel your day while supporting your paleo lifestyle. Perfect for busy mornings or a quick, nutritious snack!</Text>
              <Text style={styles.productIngredients}>Ingredients: 1/2 frozen banana, sliced, or 4 florets frozen cauliflower,
1/4 cup coconut yogurt,
1/2 cup almond milk,
1/4 cup frozen blueberries, plus more for serving,
1/4 cup frozen spinach,
2 Tbsp paleo vanilla or plain protein powder,
1 tsp chia seeds,
1/2 tsp freshly grated ginger.</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.addButton} onPress={() => handleAddToCart('Meal-Replacement Paleo Protein Shake')}>
                  <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.orderButton} onPress={() => handleOrder('Meal-Replacement Paleo Protein Shake')}>
                  <Text style={styles.buttonText}>Order</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.productItem}>
              <Image
                source={{ uri: 'https://www.eatthis.com/wp-content/uploads/sites/4/2019/10/keto-avocado-blueberry-hemp-seed-shake.jpg?resize=640,468&quality=82&strip=all' }}
                style={styles.productImage}
              />
              <Text style={styles.productTitle}>Green Keto Shake</Text>
              <Text style={styles.productDescription}>Elevate your nutrition with our Green Keto Shake. This creamy blend combines wholesome avocado, nutrient-dense spinach, and a protein boost, delivering healthy fats and greens in every sip. Perfect for low-carb diets, it’s a delicious way to stay satisfied and energized throughout the day!</Text>
              <Text style={styles.productIngredients}>Ingredients: 1 cup full-fat coconut milk,
1/2 cup cold water,
1 cup fresh baby spinach,
1 cup frozen blueberries,
1/2 medium avocado, pitted and peeled,
2 tsp shelled hemp seeds,
6 to 8 drops liquid stevia,
Fresh blueberries. </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.addButton} onPress={() => handleAddToCart('Green Keto Shake')}>
                  <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.orderButton} onPress={() => handleOrder('Green Keto Shake')}>
                  <Text style={styles.buttonText}>Order</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.productItem}>
              <Image
                source={{ uri: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/09/banana-date-hemp-kefir-smoothie.jpg?resize=640,468&quality=82&strip=all' }}
                style={styles.productImage}
              />
              <Text style={styles.productTitle}>Kefir Smoothie</Text>
              <Text style={styles.productDescription}>Revitalize your gut health with our Kefir Smoothie. This creamy blend combines tangy kefir with sweet bananas and dates, creating a deliciously nutritious drink packed with probiotics. Perfect for a refreshing snack or a wholesome breakfast option, it’s both satisfying and beneficial for your digestion!</Text>
              <Text style={styles.productIngredients}>Ingredients: 1 cup plain whole milk kefir,
1 small frozen banana,
1/2 cup hemp milk,
1/2 cup chopped pitted Medjool dates,
1 tablespoon hemp seed,
1 tablespoon vanilla extract,
pinch of ground cinnamon, plus extra for garnish,
pinch of sea salt or Himalayan pink salt,
1 tablespoon peanut butter.</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.addButton} onPress={() => handleAddToCart('Kefir Smoothie')}>
                  <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.orderButton} onPress={() => handleOrder('Kefir Smoothie')}>
                  <Text style={styles.buttonText}>Order</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        ) : (
          // BULKING Mode Products
          <>
            <View style={styles.productItem}>
              <Image
                source={{ uri: 'https://www.garagegymreviews.com/wp-content/uploads/Salted-Caramel-Protein-Shake.png' }}
                style={styles.productImage}
              />
              <Text style={styles.productTitle}>Salted Caramel Protein Shake</Text>
              <Text style={styles.productDescription}>Indulge your taste buds with our Salted Caramel Protein Shake. This rich and creamy shake combines smooth protein with decadent caramel flavor, finished with a hint of sea salt for the perfect sweet-salty balance. Ideal for post-workout recovery or a delicious treat any time!</Text>
              <Text style={styles.productIngredients}>Ingredients: 2 scoops ON Gold Standard Whey (Vanilla), 
2 frozen bananas,
½ cup whole milk, 
¼ cup greek yogurt, 
3 pitted medjool dates, 
½ tsp cinnamon, 
½ tsp vanilla extract </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.addButton} onPress={() => handleAddToCart('Salted Caramel Protein Shake')}>
                  <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.orderButton} onPress={() => handleOrder('Salted Caramel Protein Shake')}>
                  <Text style={styles.buttonText}>Order</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.productItem}>
              <Image
                source={{ uri: 'https://www.garagegymreviews.com/wp-content/uploads/Chocolate-Protein-Shake.png' }}
                style={styles.productImage}
              />
              <Text style={styles.productTitle}>Chocolate Peanut Butter Protein Shake</Text>
              <Text style={styles.productDescription}>Satisfy your cravings with our Chocolate Peanut Butter Protein Shake. This decadent blend features creamy peanut butter and rich chocolate, delivering a delicious boost of protein to fuel your day. Perfect for a post-workout treat or a delightful snack!</Text>
              <Text style={styles.productIngredients}>Ingredients: 1 scoop Legion Athletics Isolate Protein Powder (Chocolate Peanut Butter),
2 tbsp peanut butter,
1 banana,
1 cup whole milk,
½ cup old-fashioned oats,
1 tsp cocoa powder ,
Pinch of sea salt, </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.addButton} onPress={() => handleAddToCart('Chocolate Peanut Butter Protein Shake')}>
                  <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.orderButton} onPress={() => handleOrder('Chocolate Peanut Butter Protein Shake')}>
                  <Text style={styles.buttonText}>Order</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.productItem}>
              <Image
                source={{ uri: 'https://www.garagegymreviews.com/wp-content/uploads/Vanilla-Protein-Shake.png' }}
                style={styles.productImage}
              />
              <Text style={styles.productTitle}>Vanilla Oatmeal Protein Smoothie </Text>
              <Text style={styles.productDescription}>Start your day right with our Vanilla Oatmeal Protein Smoothie. This hearty blend combines wholesome oats, creamy vanilla, and a protein boost, creating a satisfying and nutritious option for breakfast or a midday pick-me-up. Deliciously filling and perfect for fueling your active lifestyle!</Text>
              <Text style={styles.productIngredients}>Ingredients: 1 cup whole milk, oatmeal, 1 tbsp chopped almonds, 1/8 cup maple syrup, 1/2 tsp cinnamon. </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.addButton} onPress={() => handleAddToCart('Chocolate Banana Protein Shake')}>
                  <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.orderButton} onPress={() => handleOrder('Chocolate Banana Protein Shake')}>
                  <Text style={styles.buttonText}>Order</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.productItem}>
              <Image
                source={{ uri: 'https://www.garagegymreviews.com/wp-content/uploads/Pumpkin-Spice-Protein-Shake.png' }}
                style={styles.productImage}
              />
              <Text style={styles.productTitle}>Pumpkin Protein Milkshake</Text>
              <Text style={styles.productDescription}>Indulge in the flavors of fall with this creamy Pumpkin Protein Milkshake. Packed with pumpkin puree, protein powder, and a blend of warming spices like cinnamon and nutmeg, it’s a deliciously nutritious way to fuel your workout and satisfy your cravings!</Text>
              <Text style={styles.productIngredients}>Ingredients: 1 scoop of Kaged Whey Protein Isolate (Vanilla), 
1 cup of whole milk, 
1 frozen banana, 
3 tbsp of pumpkin puree, 
1 tbsp of almond butter, 
1/8 tsp of pumpkin spice, 
1/8 tsp of ground cinnamon, 
Pinch of nutmeg, </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.addButton} onPress={() => handleAddToCart('Peanut Butter Oatmeal Protein Shake')}>
                  <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.orderButton} onPress={() => handleOrder('Peanut Butter Oatmeal Protein Shake')}>
                  <Text style={styles.buttonText}>Order</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.productItem}>
              <Image
                source={{ uri: 'https://www.garagegymreviews.com/wp-content/uploads/Protein-Shake-Potential-Images.png' }}
                style={styles.productImage}
              />
              <Text style={styles.productTitle}>Plant-Based Blueberry Orange Smoothie</Text>
              <Text style={styles.productDescription}>Refresh your day with this vibrant Plant-Based Blueberry Orange Smoothie. Bursting with antioxidant-rich blueberries and zesty orange juice, it’s a delicious blend that’s both energizing and nourishing. Perfect for a quick breakfast or a revitalizing snack!</Text>
              <Text style={styles.productIngredients}>Ingredients: 1 scoop Vega Sport Premium Protein (Vanilla) 
1 whole orange, peeled,
1 cup non-dairy milk (like almond or coconut milk),
1 cup frozen blueberries,
1 tbsp almond butter,
½ cup old-fashioned oats, </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.addButton} onPress={() => handleAddToCart('Mango Coconut Protein Shake')}>
                  <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.orderButton} onPress={() => handleOrder('Mango Coconut Protein Shake')}>
                  <Text style={styles.buttonText}>Order</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </ScrollView>

      <StatusBar style="auto" />
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
  toggleSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  toggleButtonActive: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginHorizontal: 10,
  },
  toggleButtonInactive: {
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginHorizontal: 10,
  },
  toggleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productList: {
    alignItems: 'center',
  },
  productItem: {
    backgroundColor: '#333',
    borderRadius: 10,
    width: '90%',
    marginVertical: 10,
    padding: 10,
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  productTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  productDescription: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 5,
  },
  productIngredients: {
    color: '#ff6347',
    fontSize: 14,
    marginTop: 5,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  addButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
    alignItems: 'center',
  },
  orderButton: {
    backgroundColor: '#28A745',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginLeft: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Home;
