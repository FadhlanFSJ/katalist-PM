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
    Image} from 'react-native';
import Separator from "../components/separator";
import { useState } from 'react';

const Login = ({ navigation}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [loginError, setLoginError] = useState("");

    const handleLogin = () => {
        setUsernameError(false);
        setPasswordError(false);
        setLoginError("");

        const dummyUsername = "test";
        const dummyPassword = "test";

        if (username.trim() === "") {
            setUsernameError(true);
        }

        if (password.trim() === "") {
            setPasswordError(true);
        }

        if (username.trim() !== "" && password.trim() !== "") {
            if (username === dummyUsername && password === dummyPassword) {
              navigation.navigate("SignUp");
            } else {
              setLoginError("Username atau Password salah");
            }
          } 
        
        else {
            setLoginError("Masukkan Email dan Password !");
        }
    };

    return (
        <View style={styles.container}>
            <Image
                style={styles.profile}
                source={require("../assets/user_icon.png")}
            />
            <Text style={styles.title}>Halo Katalur</Text>
            <Text style={styles.greeting}>Silahkan Login atau buat akun dulu ya Katalur :)</Text>

            {loginError !== "" && (
                    <Text style={styles.errorMessage}>{loginError}</Text>
            )}
            <View style={styles.form}>
                <Text style={styles.formTitle}>Username</Text>
                <TextInput
                    style={[styles.textInput, usernameError  && styles.errorForm]}
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />
            </View>

            <View style={styles.form}>
                <Text style={styles.formTitle}>Password</Text>
                <TextInput
                    style={[styles.textInput, passwordError  && styles.errorForm]}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>

            <View style={styles.form}>
                <TouchableOpacity>
                    <Text style={styles.forgotPass}>Lupa password ?</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.textLogin}>
                        Login Kiw
                    </Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity 
                    style={{marginTop:10}}
                    onPress={() => navigation.navigate("SignUp")}
                >
                    <Text style={styles.newAcc}>aku buat akun dulu aja deh</Text>
                </TouchableOpacity>
            </View>


            <Separator height={20}/>

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
                
                <Text style={styles.contGoogle}>
                    atau
                </Text>

                <TouchableOpacity>
                    <Text style={styles.katalog}>
                        Aku Cuma Mau Lihat Katalog
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Login;

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

    },

    title : {
        fontWeight: "bold",
        fontSize:30,
        color:"#000000",
        marginBottom: 20,
        fontFamily: "Poppins-Black",
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
        fontFamily: "Poppins-Black",
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
        borderWidth: 1
    
    },

    forgotPass : {
        fontFamily: "Poppins-Regular",
        fontSize: 12,
        lineHeight: 15,
        color: "#000000",
        marginRight: 205
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

    newAcc : {
        fontFamily: "Poppins-Regular",
        lineHeight: 16.5,
        fontSize: 11,
        textAlign: "center",
        color: "#FC6011",
    },

    googleAuth : {
        width: 257.36,
        height: 130,
        margin: 6,
        alignItems: "center",
        justifyContent: "center"
    },

    contGoogle: {
        fontFamily: "Poppins-Regular",
        fontWeight: "bold",
        fontSize: 11,
        lineHeight: 16.5,
        textAlign: "center",
        paddingBottom: 10,
    },

    katalog :{
        width: 210,
        height: 30,
        borderRadius: 12,
        borderWidth: 1,
        textAlign: "center",
        paddingTop: 5,
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
});