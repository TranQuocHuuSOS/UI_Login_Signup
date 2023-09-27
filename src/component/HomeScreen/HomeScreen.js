import {
  Button,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import styles from "./styles";
const Images = require("../../../assets/images/background.jpg");
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Images} resizeMode="cover" style={styles.image}>
        <Text style={styles.homescreen}>Welcom To Shh!</Text>
        <Text style={styles.title1}>A Hub Where Whispers Echo Loudest</Text>
        <TouchableOpacity>
          <View style={styles.button_signup}>
            <Button
              title="Sign in"
              color="black"
              onPress={() => navigation.navigate("Signin")}
            ></Button>
          </View>
        </TouchableOpacity>
        <View style={styles.confirm_account}>
          <Text style={styles.confirm}>
            Already have an account?
          </Text>
          <Text style={{ color: "black" }} onPress={()=>navigation.navigate('Signin')}>Login</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
