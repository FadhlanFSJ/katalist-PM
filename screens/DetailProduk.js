import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DetailProduk = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const selectedProduk = route.params.data;
  const [totalHarga, setTotalHarga] = useState(0);

  renderItem = ({ item }) => {
    return (
      <View style={styles.ProdukItem}>
        <Image
          style={styles.imageItem}
          source={{
            uri: item.imageProduk,
          }}
        />
        <View style={styles.ProdukDetail}>
          <Text style={styles.judulProduk}>
            {item.nama_produk}
          </Text>
          <Text style={styles.harga}>{item.harga}</Text>
        </View>
      </View>
    )
  }

  const calculateHarga = () => {
    const total = selectedProduk.reduce((acc, item) => acc + item.harga, 0);
    setTotalHarga(total);
  }

  const handleBayarPesanan = () => {
    // Navigasi ke halaman BayarProduk
    navigation.navigate('BayarProduk', { data: selectedProduk });
  };

  useEffect(() => {
    calculateHarga();
  }, [])
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
        <FlatList
          data={selectedProduk}
          renderItem={renderItem}
          keyExtractor={(item) => item.id_keranjang.toString()}
        />
        <View style={styles.totalBayarContainer}>
          <Text style={styles.totalBayarText}>Total Bayar:</Text>
          <Text style={styles.totalBayarHarga}>Rp. {totalHarga}</Text>
        </View>
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
