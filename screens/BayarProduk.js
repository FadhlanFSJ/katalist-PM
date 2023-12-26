import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BayarProduk = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [countdown, setCountdown] = useState(120);
  const [isCancelable, setIsCancelable] = useState(true);
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const beliProduk = route.params.data;


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      setIsCancelable(false);
    }
  }, [countdown, navigation]);
  useEffect(() => {
    loadUserData();
  }, [])

  const getData = async () => {
    try {
      const response = await axios.get('http://192.168.1.8:3001/toko/');
      setData(response.data)
    } catch (error) {
      console.error("Error Getting data: ", error)
    }
  };

  const loadUserData = async () => {
    try {
      const storedUserData = await AsyncStorage.getItem('userData');
      if (storedUserData) {
        setUser(JSON.parse(storedUserData));
      }
    } catch (error) {
      console.error('Error Getting data user form Async Storage: ', error)
    }
  }
  const handleBatalkanPesanan = () => {
    Alert.alert(
      'Konfirmasi Pembatalan Pesanan',
      'Apakah yakin membatalkan pesanan?',
      [
        {
          text: 'Tidak',
          style: 'cancel',
        },
        {
          text: 'Iya Batalkan',
          onPress: () => {
            alert('Pesanan berhasil dibatalkan');
            navigation.goBack();
          },
        },
      ],
      { cancelable: false }
    );
  };

  const addHistoryPembelian = async () => {
    try {
      if (!user || Object.keys(user).length === 0) {
        await loadUserData();
      }
      const historyData = {
        ...beliProduk,
        userData: user
      };
      const existingHistory = await AsyncStorage.getItem('purchaseHistory');
      const parsedHistory = existingHistory ? JSON.parse(existingHistory) : [];
      parsedHistory.push(historyData);
      await AsyncStorage.setItem('purchaseHistory', JSON.stringify(parsedHistory));
      alert("Pembelian Berhasil ditambahkan ke History");
      console.log("Data History : ", parsedHistory);
    } catch (error) {
      console.error("Error: ", error)
    }
    // alert('QR Code berhasil diunduh');
  };

  const formatCountdown = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <QRCode value="QR Code data" size={200} />
        <Text style={styles.qrCodeText}>
          Silahkan Scan QR Code ini menggunakan QRIS pada setiap aplikasi pembayaran Seperti Gopay, Shopeepay, BCA Mobile, dan aplikasi banking maupun e-wallet lainnya.
        </Text>
        <Text style={[styles.qrCodeText, styles.marginBottom]}>
          Silahkan melakukan pembayaran sebelum waktu habis ({formatCountdown(countdown)})
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={[styles.button, styles.whiteButton]}
          onPress={handleBatalkanPesanan}
          disabled={!isCancelable}
        >
          <Text style={[styles.buttonText, styles.orangeText]}>Batalkan Pesanan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.orangeButton]}
          onPress={() => addHistoryPembelian()}
        >
          <Text style={styles.buttonText}>Bayar Sekarang!!!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: StatusBar.currentHeight || 0,
  },
  topContainer: {
    alignItems: 'center',
  },
  bottomContainer: {
    marginBottom: 20,
  },
  qrCodeText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 8,
  },
  marginBottom: {
    marginBottom: 20,
  },
  button: {
    alignSelf: 'stretch',
    borderRadius: 8,
    paddingVertical: 12,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#FC6011',
  },
  orangeButton: {
    backgroundColor: '#FC6011',
  },
  buttonText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: 'white',
  },
  orangeText: {
    color: '#FC6011',
  },
  qrCodeImage: {
    width: 200,
    height: 200,
    marginVertical: 8,
  },
});

export default BayarProduk;
