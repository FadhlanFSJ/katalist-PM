import React, { useEffect, useState } from "react";
import axios from "axios";
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
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Assume you have already set up your navigation stack

export default function AllStore({ route }) {
  const navigation = useNavigation();
  const { username } = route.params || {};
  const [selectedCategory, setSelectedCategory] = React.useState("Semua");
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [searchToko, setSearchToko] = useState('');
  const hasUsername = Boolean(username);

  const handleCategoryPress = async (category) => {
    const lowerCaseKategori = category.toLowerCase();
    console.log(lowerCaseKategori)
    try {
      if (lowerCaseKategori === "semua") {
        getData();
      } else {
        // filteredData = data.filter(item => item.kategori.toLowerCase() === lowerCaseKategori);
        const response = await axios.get(`http://192.168.1.4:3001/toko?kategori=${lowerCaseKategori}`)
        setData(response.data)
      }
      setSelectedCategory(category);
      console.log(data);
    } catch (error) {
      console.error('Error filtering data: ', error.message);
      return [];
    }
  };
  const handleSearch = () => {
    if (searchToko === '') {
      getData();
    } else {
      const filteredData = data.filter(item => item.nama.includes(searchToko));
      setData(filteredData)
    }
  }
  const [profileImage, setProfileImage] = useState(null);

  const handleProfile = () => {
    if (hasUsername) {
      navigation.navigate("Profile");
    } else {
      Alert.alert(
        'Belum Login',
        'Sepertinya Anda Belum melakukan login, lakukan login terlebih dahulu!',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Login')
          }
        ]
      )
    }
  };
  const getData = async () => {
    try {
      const response = await axios.get('http://192.168.1.8:3001/toko');
      setData(response.data)
    } catch (error) {
      console.error("Error Getting data: ", error)
    }
  }
  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigateToDetailStore(item)}
      >
        <View style={styles.DataToko}>
          <View style={styles.card}>
            <Image source={{ uri: item.imageToko }} style={styles.cardImage} />
            <View style={styles.cardDetails}>
              <Text style={styles.cardKategori}>{`| ${item.kategori}`}</Text>
              <Text style={styles.cardTitle}>{item.nama}</Text>
              <Text style={styles.cardDescription}>{item.alamat}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const navigateToDetailStore = (store) => {
    if (hasUsername) {
      navigation.navigate("DetailStore", { data: store });
    } else {
      Alert.alert(
        'Belum Login',
        'Sepertinya anda belum melakukan login, lakukan login terlebih dahulu!',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Login')
          }
        ]
      )
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.TopPage}>
          <Text style={styles.headers}>Hi {username} !</Text>
          <TouchableOpacity style={styles.profile} onPress={handleProfile}>
            {profileImage ? (
              <Image source={{ uri: profileImage }} style={styles.profileImage} />
            ) : (
              <View style={styles.imageContainer}>
                <Image
                  source={require('../assets/user_icon.png')}
                  style={styles.profileImage}
                />
              </View>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.search}>
          <TextInput
            style={styles.searchbar}
            placeholder="Cari Toko"
            value={searchToko}
            onChangeText={(text) => setSearchToko(text)}
          />
          <TouchableOpacity
            style={{ marginLeft: 5 }}
            onPress={handleSearch}
          >
            <Text>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listData}>
          <Text style={{ fontFamily: 'Poppins-Bold' }}>Kategori Toko</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.kategori}>
              {["Semua", "Makanan", "Bangunan", "Parfum", "Furnitur"].map((category, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.buttonKategori, {
                        backgroundColor: selectedCategory === category ? "#FDBF50" : "#F4F4F8",
                      },
                    ]}
                    onPress={() => handleCategoryPress(category)}
                  >
                    <Text
                      style={[
                        styles.textKategori,
                        {
                          color: selectedCategory === category ? "white" : "black",
                        },
                      ]}
                    >
                      {category}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            refreshing={refreshing}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headers: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
  },
  TopPage: {
    paddingTop: StatusBar.currentHeight || 0,
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profile: {
    marginRight: 20,
    marginBottom: 5,
  },
  imageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 75,
  },
  search: {
    marginTop: 10,
    marginHorizontal: 40,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchbar: {
    flex: 1,
    paddingTop: 4,
    paddingLeft: 10,
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 7,
    fontFamily: 'Poppins-Regular',
    backgroundColor: '#E0E0E4'
  },
  listData: {
    marginTop: 10,
    marginHorizontal: 20,
    flex: 1,
  },
  kategori: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 10,
    marginTop: 10,
  },
  buttonKategori: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 3,
    marginRight: 10,
    borderColor: 'white',
    backgroundColor: '#F4F4F8',
    maxHeight: 30
  },
  textKategori: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  cardKategori: {
    color: '#FDBF50',
    fontFamily: 'Poppins-Regular',
    fontSize: 10
  },
  cardImage: {
    width: 100,
    height: "100%",
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'cover'
  },
  cardDetails: {
    flex: 1,
    paddingLeft: 10
  },
  cardTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    marginBottom: 5,
  },
  cardDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  DataToko: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 7,
    padding: 10,
    marginBottom: 10,
    flexDirection: "row"
  },
});
