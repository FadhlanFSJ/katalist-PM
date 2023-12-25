import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const DetailProduk = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const store = route.params || {};

  console.log("Store : ", store);

  const handlePesan = () => {
    // Navigasi ke halaman DetailProduk
    navigation.navigate('DetailProduk');
  };

  renderItem = ({ item }) => {
    return (
      <View style={styles.ProdukItem}>
        <Image
          style={styles.imageItem}
          source={{
            uri:
              item.imageProduk,
          }}
        />
        <View style={styles.ProdukDetail}>
          <Text style={styles.judulProduk}>
            {item.nama_produk}
          </Text>
          <Text style={styles.deskripsiProduk}>Rp. {item.harga}</Text>
          <Text style={styles.stokProduk}>Stok yang tersedia : {item.stok}</Text>
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
    )
  }

  const handleAddToCart = () => {
    // Implementasi logika untuk tombol "Add to Cart"
    console.log('Tombol Add to Cart diklik');
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.TopPage}>
          <Text style={styles.headers}>Detail Produk Toko</Text>
        </View>
        <FlatList
          data={(store.data.produk || []).flat()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id_produk.toString()}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8
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
  stokProduk: {
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
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
