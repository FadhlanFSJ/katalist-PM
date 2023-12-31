// HistoryTransaksi.js

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, FlatList } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HistoryTransaksi = () => {
  const navigation = useNavigation();
  const [tokoData, setTokoData] = useState([]);
  const [historyBeli, setHistoryBeli] = useState([]);

  const getTokoData = async () => {
    try {
      const response = await axios.get('http://192.168.1.8:3001/toko');
      setTokoData(response.data);
    } catch (error) {
      console.error('Error getting store data: ', error.message);
    }
  };
  const getData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('purchaseHistory');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setHistoryBeli(parsedData)
        console.log(parsedData)
      }
    } catch (error) {
      console.error("Error : ", error)
    }
  }

  useEffect(() => {
    getData();

    const updateHistoryBeli = historyBeli.map((item, index) => {
      const updatedItem = { ...item };
      updateItem[0].id_pembelian = index + 1;
      return updatedItem
    });
    setHistoryBeli(updateHistoryBeli);
  }, []);

  const renderItem = ({ item }) => {
    const ProductInfo = item[0];
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigateToDetailStore(item)}
      >
        <View style={styles.tokoItem}>
          <View style={styles.card}>
            <Image source={{ uri: ProductInfo.imageProduk }} style={styles.cardImage} />
            <View style={styles.cardDetails}>
              <Text style={styles.cardTitle}>{ProductInfo.nama_produk}</Text>
              <Text style={styles.cardText}>
                Total Pembelian: {ProductInfo.harga}
              </Text>
              <Text style={[styles.cardText, { color: getStatusColor() }]}>
                {getStatusText()}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }


  const navigateToDetailStore = (store) => {
    navigation.navigate('DetailStore', { data: store });
  };

  const getTotalPembelian = () => {
    // Implement your logic to calculate total pembelian here
    return 100000; // Dummy value, replace with actual calculation
  };

  const getStatusText = () => {
    // Implement your logic to determine status here
    return 'Selesai'; // Dummy value, replace with actual status
  };

  const getStatusColor = () => {
    // Implement your logic to determine status color here
    return 'green'; // Dummy value, replace with actual color
  };

  const formatToRupiah = (number) => {
    const formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    });
    return formatter.format(number);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>History Transaksi</Text>
      <FlatList
        data={historyBeli}
        keyExtractor={(item) => item.id_pembelian}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  tokoItem: {
    marginBottom: 16,
  },
  card: {
    flexDirection: 'row',
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 5,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  cardDetails: {
    flex: 1,
    padding: 16,
  },
  cardTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    marginBottom: 10,
  },
  cardDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  cardText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    marginTop: 5,
  },
});

export default HistoryTransaksi;
