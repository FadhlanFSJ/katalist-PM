// HistoryTransaksi.js

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, FlatList } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const HistoryTransaksi = () => {
  const navigation = useNavigation();
  const [tokoData, setTokoData] = useState([]);

  const getTokoData = async () => {
    try {
      const response = await axios.get('http://192.168.1.4:3001/toko');
      setTokoData(response.data);
    } catch (error) {
      console.error('Error getting store data: ', error.message);
    }
  };

  useEffect(() => {
    getTokoData();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigateToDetailStore(item)}
    >
      <View style={styles.tokoItem}>
        <View style={styles.card}>
          <Image source={{ uri: item.imageToko }} style={styles.cardImage} />
          <View style={styles.cardDetails}>
            <Text style={styles.cardTitle}>{item.nama}</Text>
            <Text style={styles.cardDescription}>{item.alamat}</Text>
            <Text style={styles.cardText}>
              Total Pembelian: {formatToRupiah(getTotalPembelian())}
            </Text>
            <Text style={[styles.cardText, { color: getStatusColor() }]}>
              {getStatusText()}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

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
        data={tokoData}
        keyExtractor={(item) => item.id.toString()}
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
