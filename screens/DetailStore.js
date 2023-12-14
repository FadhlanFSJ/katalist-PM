import React from 'react'
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

const DetailStore = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.TopPage}>
                    <Text style={styles.headers}>Chicken Smash Pak Rusdi</Text>
                </View>
                <View style={styles.search}>
                    <TextInput
                        style={styles.searchbar}
                        placeholder='Cari Produk....'
                    />
                </View>
                <View style={styles.ProfilToko}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Lihat Profil Toko</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Produk}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text style={styles.Jenis}>Makanan</Text>
                        <TouchableOpacity activeOpacity={0.9}>
                            <View style={styles.ProdukItem}>
                                <Image
                                    style={styles.imageItem}
                                    source={{ uri: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                                />
                                <View style={styles.ProdukDetail}>
                                    <Text style={styles.kategoriProduk}>| Makanan</Text>
                                    <Text style={styles.judulProduk}>Ini Merupakan Judul Produk Makanan</Text>
                                    <Text style={styles.deskripsiProduk}>Lejat dan Bergiji Well</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.Jenis}>Makanan</Text>
                        <TouchableOpacity activeOpacity={0.9}>
                            <View style={styles.ProdukItem}>
                                <Image
                                    style={styles.imageItem}
                                    source={{ uri: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                                />
                                <View style={styles.ProdukDetail}>
                                    <Text style={styles.kategoriProduk}>| Makanan</Text>
                                    <Text style={styles.judulProduk}>Ini Merupakan Judul Produk Makanan</Text>
                                    <Text style={styles.deskripsiProduk}>Lejat dan Bergiji Well</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.Jenis}>Makanan</Text>
                        <TouchableOpacity activeOpacity={0.9}>
                            <View style={styles.ProdukItem}>
                                <Image
                                    style={styles.imageItem}
                                    source={{ uri: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                                />
                                <View style={styles.ProdukDetail}>
                                    <Text style={styles.kategoriProduk}>| Makanan</Text>
                                    <Text style={styles.judulProduk}>Ini Merupakan Judul Produk Makanan</Text>
                                    <Text style={styles.deskripsiProduk}>Lejat dan Bergiji Well</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.Jenis}>Makanan</Text>
                        <TouchableOpacity activeOpacity={0.9}>
                            <View style={styles.ProdukItem}>
                                <Image
                                    style={styles.imageItem}
                                    source={{ uri: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                                />
                                <View style={styles.ProdukDetail}>
                                    <Text style={styles.kategoriProduk}>| Makanan</Text>
                                    <Text style={styles.judulProduk}>Ini Merupakan Judul Produk Makanan</Text>
                                    <Text style={styles.deskripsiProduk}>Lejat dan Bergiji Well</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>

                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headers: {
        fontFamily: "Poppins-Bold",
        fontSize: 20
    },
    TopPage: {
        paddingTop: StatusBar.currentHeight || 0,
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center'
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
    ProfilToko: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
    button: {
        padding: 5,
        width: 130,
        borderRadius: 15,
        borderColor: 'white',
        backgroundColor: '#FC6011',
    },
    buttonText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 13,
        color: 'white',
        textAlign: 'center'
    },
    Produk: {
        justifyContent: 'center',
        padding: 10,
        flex: 1
    },
    Jenis: {
        fontFamily: 'Poppins-Bold',
        marginHorizontal: 10,
        marginTop: 10,
    },
    ProdukItem: {
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 7,
        padding: 10,
        marginBottom: 10,
        flexDirection: "row"
    },
    imageItem: {
        width: 100,
        height: "100%",
        borderRadius: 10,
        marginBottom: 10,
        resizeMode: 'cover'
    },
    ProdukDetail: {
        flex: 1,
        paddingLeft: 10
    },
    judulProduk: {
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        marginBottom: 10
    },
    kategoriProduk: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: '#FDBF50'
    },
    deskripsiProduk: {
        fontFamily: 'Poppins-Regular',
        fontSize: 11
    }
})

export default DetailStore