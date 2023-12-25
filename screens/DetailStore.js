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
  FlatList,
  Alert
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const DetailProduk = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const store = route.params || {};
  const [keranjang, setKeranjang] = useState([]);
  const [totalHarga, setTotalHarga] = useState(0);

  // console.log("Store : ", store);

  const handlePesan = (item) => {
    navigation.navigate('DetailProduk');
  };

  const pesan = ({ item }) => {
    if (totalHarga === 0) {
      Alert.alert(
        'Keranjang Kosong',
        'Anda belum menambahkan produk ke keranjang. Silahkan tambahkan produk terlebih dahulu!',
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed')
          }
        ]
      )
    } else {
      navigation.navigate('DetailProduk', { data: item })
    }
  }

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
              onPress={() => handleAddToCart(item)}
            >
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

  const handleAddToCart = (item) => {
    setKeranjang((prevKeranjang) => [...prevKeranjang, item]);
    setTotalHarga((prevTotalHarga) => prevTotalHarga + item.harga);
    console.log(`Menambahkan Data ${item} pada Keranjang!`);
    console.log(keranjang);
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
        <View style={styles.totalHarga}>
          <Text style={styles.textTotalHargaHeader}>Total Harga:</Text>
          <Text style={styles.numberTotalHarga}>Rp : {totalHarga}</Text>
          <TouchableOpacity style={styles.buttonPesanCart} onPress={() => pesan(keranjang)}>
            <Text style={styles.buttonPesanCartText}>Pesan</Text>
          </TouchableOpacity>
        </View>
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
    alignItems: 'center'
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
  totalHarga: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white', // Warna latar belakang sesuai kebutuhan
    padding: 16,
    flexDirection: 'column',
  },
  textTotalHargaHeader: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    alignItems: 'flex-start'
  },
  numberTotalHarga: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    alignItems: 'flex-start',
  },
  buttonPesanCart: {
    backgroundColor: '#FC6011',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 7
  },
  buttonPesanCartText: {
    color: 'white',
    fontFamily: 'Poppins-Regular'
  }
});

export default DetailProduk;
