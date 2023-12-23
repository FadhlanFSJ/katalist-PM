import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList,
    } from 'react-native';
import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import Separator from "../components/separator";
import { useState, useEffect } from 'react';

const SignUp = ({navigation}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [email, setEmail] = useState("");
    const [nama, setNama] = useState("");
    const [phone, setPhone] = useState("");
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPassError, setConfirmPassError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [namaError, setNamaError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [signUpError, setSignUpError] = useState("");

    useEffect(() => {
        const initializeAsyncStorage = async () => {
        //   await AsyncStorage.clear(); // Delete pas reload
        };
    
        initializeAsyncStorage();
    }, []);

    const handleSignUp = async () => {
        if(username.trim() === "") {
            setUsernameError(true);
        } else{
            setUsernameError(false);
        }

        if(password.trim() === "") {
            setPasswordError(true);
        } else{
            setPasswordError(false);
        }

        if(confirmPass.trim() === ""){
            setConfirmPassError(true);
        } else{
            setConfirmPassError(false);
        }

        if(email.trim() === ""){
            setEmailError(true);
        } else{
            setEmailError(false);
        }

        if(nama.trim() === ""){
            setNamaError(true);
        } else{
            setNamaError(false);
        }

        if(phone.trim() === ""){
            setPhoneError(true);
        } else{
            setPhoneError(false);
        }

        if (
            !usernameError &&
            !passwordError &&
            !confirmPassError &&
            !emailError &&
            !namaError &&
            !phoneError
          ) {
            try {
              const userData = {
                username,
                password,
                email,
                nama,
                phone,
              };
      
              await AsyncStorage.setItem('userData', JSON.stringify(userData));
              console.log('Berhasil disimpan KATALUR');
              navigation.navigate("AllStore", {username});
            } catch (error) {
              console.log('Error saving data to AsyncStorage:');
            }
          } else {
            setSignUpError('Lengkapi Form');
          }
        };
      

    return(
        <ScrollView>
            <View style={styles.container}>
                <Image
                    style={styles.profile}
                    source={require("../assets/user_icon.png")}
                />
                <Text style={styles.title}>Halo Katalur</Text>
                <Text style={styles.greeting}>Buat akun dulu yuk, gampang kok!</Text>

                {signUpError !== "" && (
                    <Text style={styles.errorMessage}>{signUpError}</Text>
                )}

                <View style={styles.form}>
                    <Text style={styles.formTitle}>Username</Text>
                    <TextInput
                        style={[styles.textInput, usernameError && styles.errorForm]}
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                    />
                </View>

                <View style={styles.form}>
                    <Text style={styles.formTitle}>Password</Text>
                    <TextInput
                        style={[styles.textInput, passwordError && styles.errorForm]}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>

                <View style={styles.form}>
                    <Text style={styles.formTitle}>Konfirmasi Password</Text>
                    <TextInput
                        style={[styles.textInput, confirmPassError && styles.errorForm]}
                        secureTextEntry={true}
                        value={confirmPass}
                        onChangeText={(text) => setConfirmPass(text)}
                    />
                </View>

                <View style={styles.form}>
                    <Text style={styles.formTitle}>Email</Text>
                    <TextInput
                        style={[styles.textInput, emailError && styles.errorForm]}
                        keyboardType="email-address"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>

                <View style={styles.form}>
                    <Text style={styles.formTitle}>Nama</Text>
                    <TextInput
                        style={[styles.textInput, namaError && styles.errorForm]}
                        value={nama}
                        onChangeText={(text) => setNama(text)}
                    />
                </View>

                <View style={styles.form}>
                    <Text style={styles.formTitle}>Nomor Handphone</Text>
                    <TextInput
                        style={[styles.textInput, phoneError && styles.errorForm]}
                        keyboardType="number-pad"
                        value={phone}
                        onChangeText={(text) => setPhone(text)}
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                        <Text style={styles.textLogin}>
                            SignUp Kiw
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.googleAuth}>
                    <Text style={styles.contGoogle}>
                        Lanjutkan dengan Google
                    </Text>
                    <TouchableOpacity>
                        <Image
                            style={{marginBottom: 10}}
                            source={require("../assets/continue.png")}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default SignUp;

const styles = StyleSheet.create ({
    container : {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: {
            top: 90,
            right: 27,
            bottom: 10,
            left: 27,
        },
    },

    profile : {
        width: 124,
        height: 124,
        marginBottom: 10,
        marginTop: 50
    },

    title : {
        fontWeight: "bold",
        fontSize:30,
        color:"#000000",
        marginBottom: 20,
        fontFamily: 'Poppins-Black',
        lineHeight: 45
    },

    greeting:{
        fontSize: 14,
        fontFamily: "Poppins-Regular",
        color:"#000000",
        lineHeight: 21,
        marginBottom: 40,
        textAlign: "center"
    },

    formTitle : {
        fontFamily: 'Poppins-Black',
        fontSize: 16,
        fontWeight: "bold",
        color:"#000000",
        marginBottom: 10
    },
    
    form : {
        marginBottom: 20
    },

    textInput : {
        width: 313,
        height: 39,
        borderRadius: 12,
        borderWidth: 1,
        paddingLeft: 10,
    
    },

    button : {
        backgroundColor: "#FC6011",
        width: 124,
        height: 36,
        borderRadius: 12,
        
    },

    textLogin : {
        color: "#FFFFFF",
        fontFamily: "Poppins-Regular",
        fontSize: 16,
        fontWeight: "bold",
        lineHeight: 24,
        textAlign: "center",
    },

    button : {
        backgroundColor: "#FC6011",
        width: 124,
        height: 36,
        borderRadius: 12,
        marginBottom: 10,
        paddingTop: 5
    },

    textLogin : {
        color: "#FFFFFF",
        fontFamily: "Poppins-Regular",
        fontSize: 16,
        fontWeight: "bold",
        lineHeight: 24,
        textAlign: "center",
    },

    googleAuth : {
        width: 257.36,
        height: 130,
        margin: 6,
        alignItems: "center",
        justifyContent: "center",
    
    },

    contGoogle: {
        fontFamily: "Poppins-Regular",
        fontWeight: "bold",
        fontSize: 11,
        lineHeight: 16.5,
        textAlign: "center",
        paddingBottom: 10,
    },

    errorForm : {
        borderColor: "red"
    },

    errorMessage: {
        color: "red",
        fontFamily: "Poppins-Regular",
        fontSize: 12,
        lineHeight: 15,
        textAlign: "center",
        marginBottom: 10,
    },
})