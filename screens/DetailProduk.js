import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DetailProduk = () => {
  const navigation = useNavigation();

  const handleBayarPesanan = () => {
    // Navigasi ke halaman BayarProduk
    navigation.navigate('BayarProduk');
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.TopPage}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headers}>Rincian Pesanan</Text>
        </View>
        <ScrollView>
          {/* Gambar dan detail produk pertama */}
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
              <Text style={styles.harga}>Rp 50.000</Text>
            </View>
          </View>
          {/* Gambar dan detail produk kedua */}
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
              <Text style={styles.harga}>Rp 50.000</Text>
            </View>
          </View>
          {/* Gambar dan detail produk ketiga */}
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
              <Text style={styles.harga}>Rp 50.000</Text>
            </View>
          </View>
          {/* Keterangan Total Bayar */}
          <View style={styles.totalBayarContainer}>
            <Text style={styles.totalBayarText}>Total Bayar:</Text>
            <Text style={styles.totalBayarHarga}>Rp 150.000</Text>
          </View>
        </ScrollView>
        {/* Tombol Bayar Pesanan */}
        <TouchableOpacity
          style={styles.buttonBayar}
          onPress={handleBayarPesanan}
        >
          <Text style={styles.buttonText}>Bayar Pesanan</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
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
  backButton: {
    position: 'absolute',
    left: 16,
    top: 16,
    zIndex: 1,
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
  harga: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: '#FC6011',
    marginTop: 10,
  },
  totalBayarContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  totalBayarText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
  },
  totalBayarHarga: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: '#FC6011',
    marginTop: 10,
  },
  buttonBayar: {
    alignSelf: 'center',
    backgroundColor: '#FC6011',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 24,
    marginTop: 10,
  },
  buttonText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: 'white',
  },
});

export default DetailProduk;
