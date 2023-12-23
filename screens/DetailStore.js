import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DetailProduk = () => {
  const navigation = useNavigation();

  const handlePesan = () => {
    // Navigasi ke halaman DetailProduk
    navigation.navigate('DetailProduk');
  };

  const handleAddToCart = () => {
    // Implementasi logika untuk tombol "Add to Cart"
    console.log('Tombol Add to Cart diklik');
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.TopPage}>
          <Text style={styles.headers}>Detail Produk</Text>
        </View>
        <ScrollView>
          {/* Gambar dan detail produk */}
          <View style={styles.ProdukItem}>
            <Image
              style={styles.imageItem}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              }}
            />
            <View style={styles.ProdukDetail}>
              <Text style={styles.kategoriProduk}>| Makanan</Text>
              <Text style={styles.judulProduk}>
                Ini Merupakan Judul Produk Makanan
              </Text>
              <Text style={styles.deskripsiProduk}>Lejat dan Bergiji Well</Text>

              {/* Tombol Pesan dan Add to Cart */}
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.button, styles.buttonPesan]}
                  onPress={handlePesan}
                >
                  <Text style={styles.buttonText}>Pesan</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.buttonAddToCart]}
                  onPress={handleAddToCart}
                >
                  <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.margin} />
          {/* Item produk kedua */}
          <View style={styles.ProdukItem}>
            <Image
              style={styles.imageItem}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              }}
            />
            <View style={styles.ProdukDetail}>
              <Text style={styles.kategoriProduk}>| Makanan</Text>
              <Text style={styles.judulProduk}>
                Ini Merupakan Judul Produk Makanan
              </Text>
              <Text style={styles.deskripsiProduk}>Lejat dan Bergiji Well</Text>

              {/* Tombol Pesan dan Add to Cart */}
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.button, styles.buttonPesan]}
                  onPress={handlePesan}
                >
                  <Text style={styles.buttonText}>Pesan</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.buttonAddToCart]}
                  onPress={handleAddToCart}
                >
                  <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.margin} />
          {/* Item produk ketiga */}
          <View style={styles.ProdukItem}>
            <Image
              style={styles.imageItem}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              }}
            />
            <View style={styles.ProdukDetail}>
              <Text style={styles.kategoriProduk}>| Makanan</Text>
              <Text style={styles.judulProduk}>
                Ini Merupakan Judul Produk Makanan
              </Text>
              <Text style={styles.deskripsiProduk}>Lejat dan Bergiji Well</Text>

              {/* Tombol Pesan dan Add to Cart */}
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.button, styles.buttonPesan]}
                  onPress={handlePesan}
                >
                  <Text style={styles.buttonText}>Pesan</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.buttonAddToCart]}
                  onPress={handleAddToCart}
                >
                  <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.margin} />
          {/* ... (dan seterusnya) */}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headers: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
  },
  TopPage: {
    paddingTop: StatusBar.currentHeight || 0,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ProdukItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 7,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
  },
  imageItem: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  ProdukDetail: {
    flex: 1,
    paddingLeft: 10,
  },
  kategoriProduk: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#FDBF50',
  },
  judulProduk: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    marginBottom: 10,
  },
  deskripsiProduk: {
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 8,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPesan: {
    backgroundColor: '#FC6011',
    marginRight: 10,
  },
  buttonAddToCart: {
    backgroundColor: '#4CAF50',
    marginLeft: 10,
  },
  buttonText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
  margin: {
    marginVertical: 10,
  },
});

export default DetailProduk;
