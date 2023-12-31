import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { Icon } from "@rneui/base";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditProfileScreen = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    // Fetch user data from AsyncStorage
    const fetchUserData = async () => {
      try {
        const storedUserData = await AsyncStorage.getItem('userData');
        if (storedUserData) {
          const parsedUserData = JSON.parse(storedUserData);
          setName(parsedUserData.nama);
          setUsername(parsedUserData.username);
          setPhoneNumber(parsedUserData.phone);
          setEmail(parsedUserData.email);
          // Jika ada url gambar di data pengguna, setel ke state profileImage
          if (parsedUserData.profileImage) {
            setProfileImage(parsedUserData.profileImage);
          }
        }
      } catch (error) {
        console.log('Error fetching user data from AsyncStorage:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleSave = async () => {
    try {
      const userData = {
        nama: name,
        username: username,
        phone: phoneNumber,
        email: email,
        // Jika ada gambar profil, tambahkan URL ke data pengguna
        profileImage: profileImage,
      };

      // Simpan data pengguna ke AsyncStorage
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      console.log('Data pengguna berhasil disimpan.');

      // Navigasi kembali ke halaman profil
      navigation.navigate('Profile');
    } catch (error) {
      console.log('Error saving user data:', error);
    }
  };

  const handleCancel = () => {
    navigation.navigate('Profile');
  };

  const handleImageUpload = () => {
    // Konfigurasi untuk react-native-image-picker
    const options = {
      title: 'Select Profile Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    // Tampilkan picker gambar
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        // Setel URL gambar ke state profileImage
        setProfileImage(response.uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.profileImageContainer} onPress={handleImageUpload}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        ) : (
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/user_icon.png')}
              style={styles.profileImage}
            />
            <View style={styles.editIconContainer}>
              <Icon
                color="#FC6011"
                name="edit"
                size={35}
                type="material"
              />
            </View>
            <Text style={styles.uploadText}>Upload Profile Image</Text>
          </View>
        )}
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <Text style={styles.formTitle}>Nama:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Text style={styles.formTitle}>Username:</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <Text style={styles.formTitle}>No HP:</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
        <Text style={styles.formTitle}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.buttonText}>Simpan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={{ ...styles.buttonText, color: '#FC6011' }}>Batal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding:20,
    backgroundColor: 'white',
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
    paddingTop:50,
  },
  imageContainer: {
    position: 'relative',
  },
  editIconContainer: {
    position: 'absolute',
    bottom: 40,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 5,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  uploadText: {
    padding: 10,
  },
formTitle : {
    fontSize: 16,
    fontWeight: "bold",
    color:"#000000",
    paddingTop:10,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    width: 313,
    height: 39,
    borderRadius: 12,
    borderWidth: 1,
    paddingLeft: 10,
    paddingBottom:5,
  },
  button:{
    alignItems:"center",
    padding:20,
  },
  saveButton: {
    backgroundColor: "#FC6011",
    width: 124,
    height: 36,
    borderRadius: 12,
    marginBottom: 10,
    paddingTop: 5, 
  },
  cancelButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#FC6011",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default EditProfileScreen;
