import { View, StyleSheet } from "react-native";
import React, { Component } from "react";
import * as Animatable from 'react-native-animatable';
import Separator from "../components/separator";

class Splash extends Component{
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.replace('Login');
        }, 2000);
    }

    render(){
        return(
            <View style={styles.splashStyle}>
                <Animatable.Image 
                    style={styles.animateImage}
                    source={require("../assets/shopping-list.png")}
                    animation="fadeIn"
                    duration={2000}
                >
                </Animatable.Image>

                <Separator height={20} />

                <Animatable.Text 
                    style={styles.animateText}
                    animation="fadeIn"
                    duration={2000}
                >
                    Katalist
                </Animatable.Text>
            </View>
        )
    }
}

export default Splash;

const styles = StyleSheet.create({
    splashStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
    },

    animateText: {
        fontSize:40,
        fontWeight: "bold",
        color:"#000000",
        fontFamily: "Poppins-Bold",

    },

    animateImage: {
        width: 120,
        height: 120
    }
})