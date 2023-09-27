import {
  Button,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import styles from "./styles";
import { TextInput } from "react-native-gesture-handler";
const Images = require("../../../assets/images/background.jpg");
const Signin = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Images} resizeMode="cover" style={styles.image}>
        <View>
          <View style={styles.body}>
            <Text style={styles.title}>Log in to Shh!</Text>
            <View style={styles.access}>
              <Image style={{width:20, height:20}} source={require("../../../assets/images/icon_gg.png")}/>
              <Button title="Log in with Google" color="black"></Button>
            </View>
            <View>
              <Text style={styles.email}>Or log in with Email</Text>
            </View>
          </View>
          <View style={styles.user}>
            <Text style={styles.text}>Username or Email</Text>
            <TextInput style={styles.input}></TextInput>
          </View>
          <View style={styles.pw}>
            <View style={styles.pws}>
              <Text style={styles.text}>Password</Text>
              <Text style={styles.forgot}>Forgot?</Text>
            </View>

            <TextInput style={styles.input}></TextInput>
          </View>
          <View style={styles.submits}>
            <Button  color="black"title="Sign in" onPress={()=>navigation.navigate("HomeScreen")}></Button>
          </View>
          <View style={styles.end}>
            <Text style={styles.an_account}>Don't have an account?</Text>
            <Text
              style={styles.submit}
              onPress={() => navigation.navigate("Signup")}
            >
              Sign up
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Signin;
