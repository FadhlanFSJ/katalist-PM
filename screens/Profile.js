import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Separator from '../components/separator';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };
  const handleLogout = () => {
    navigation.navigate('Login');
  };
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedUserData = await AsyncStorage.getItem('userData');
        if (storedUserData) {
          const parsedUserData = JSON.parse(storedUserData);
          setUserData(parsedUserData);
        }
      } catch (error) {
        console.log('Error fetching user data from AsyncStorage:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          source={require('../assets/user_icon.png')}
          style={styles.profileImage}
        />
        <Text style={styles.username}>{userData ? userData.username : ''}</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formTitle}>Nama:</Text>
        <Text style={styles.userInfo}>{userData ? userData.nama : ''}</Text>
        <Separator height={1} backgroundColor="#FC6011" />

        <Text style={styles.formTitle}>No HP:</Text>
        <Text style={styles.userInfo}>{userData ? userData.phone : ''}</Text>
        <Separator height={1} backgroundColor="#FC6011" />

        <Text style={styles.formTitle}>Email:</Text>
        <Text style={styles.userInfo}>{userData ? userData.email : ''}</Text>
        <Separator height={1} backgroundColor="#FC6011" />

      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={{ ...styles.buttonText, color: '#FC6011' }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    backgroundColor: 'white', 
  },
  button: {
    alignItems: 'center',
    padding: 20,
  },
  profile: {
    alignItems: 'center',
    marginBottom: 15,
    paddingTop:50,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  formTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 5,
    marginTop: 15,

  },
  userInfo: {
    fontSize: 16,
    marginBottom:2,
  },

  editButton: {
    backgroundColor: '#FC6011',
    width: 124,
    height: 36,
    borderRadius: 12,
    marginBottom: 10,
    paddingTop: 8,
    marginTop:50,
  },
  logoutButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FC6011',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default ProfileScreen;
