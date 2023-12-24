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
} from "react-native"
import { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';



export default function AllStore({route}) {

    const { username } = route.params;

    const [selectedCategory, setSelectedCategory] = useState("Semua");

    const handleCategoryPress = (category) => {
        setSelectedCategory(category);
    };

    const [profileImage, setProfileImage] = useState(null);

    const navigation = useNavigation();

    const handleProfile = () => {
      navigation.navigate("Profile");
    };

    const storeData = [
        // Hanya Contoh Data Sample
        {
            id: '1',
            category: 'Sembako',
            title: 'Toko Sembako Ah Tong - Wonokitri',
            description: 'Jl Wonokitri Kidul 9 Surabaya',
            imageUrl: 'https://images.unsplash.com/photo-1682687218904-de46ed992b58?q=80&w=1543&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: '2',
            category: 'Makanan & Minuman',
            title: 'Chicken Smash Pak Rusdi - Ketintang',
            description: 'Jl. Ketintang No 5 Surabaya',
            imageUrl: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: '3',
            category: 'Furnitur',
            title: 'Ace Hardware',
            description: 'Royal Plaza Mall, Lt. 2, Ketintang, Surabaya',
            imageUrl: 'https://images.unsplash.com/photo-1514988081842-feeaeac260e3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: '4',
            category: 'Material',
            title: 'Toko Jaya Abadi - Wiyung',
            description: 'Jl. Wiyung No 45, Surabaya',
            imageUrl: 'https://images.unsplash.com/photo-1595414440701-da000c40df9c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: '5',
            category: 'Aksesoris',
            title: 'Miniso - Royal Plaza',
            description: 'Royal Plaza Mall, Lt. G Jl. Ahmad Yani, Surabaya',
            imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
    ]

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity activeOpacity={0.9}>
                <View style={styles.DataToko}>
                    <View style={styles.card}>
                        <Image
                            source={{ uri: item.imageUrl }}
                            style={styles.cardImage}
                        />
                        <View style={styles.cardDetails}>
                            <Text style={styles.cardKategori}>{`| ${item.category}`}</Text>
                            <Text style={styles.cardTitle}>{item.title}</Text>
                            <Text style={styles.cardDescription}>{item.description}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

        )
    }

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
                    />
                    <TouchableOpacity style={{
                        marginLeft: 5
                    }}>
                        <Text>Search</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listData}>
                    <Text style={{
                        fontFamily: 'Poppins-Bold',
                    }}>Kategori Toko</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.kategori}>
                            {["Semua", "Makanan & Minuman", "Bangunan", "Parfum"].map((category, index) => {
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
                        data={storeData}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>

        </>
    )
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
        marginBottom:5,
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
        marginTop: 10
    },
    buttonKategori: {
        borderWidth: 1,
        borderRadius: 20,
        padding: 3,
        marginRight: 10,
        borderColor: 'white',
        backgroundColor: '#F4F4F8'
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
})
