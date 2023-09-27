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
const Signup = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Images} resizeMode="cover" style={styles.image}>
        <View>
          <View style={styles.body}>
            <Text style={styles.title}>Sign up to Shh!</Text>
            <View style={styles.access}>
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../../../assets/images/icon_gg.png")}
              />
              <Button title="Sign up with Google" color="black"></Button>
            </View>
            <View>
              <Text style={styles.email}>Or log in with Email</Text>
            </View>
          </View>
          <View style={styles.user}>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
            ></TextInput>
          </View>
          <View style={styles.pw}>
            <TextInput
              style={styles.input}
              placeholder="Enter username"
            ></TextInput>
          </View>
          <View style={styles.pw}>
            <TextInput
              style={styles.input}
              placeholder="Enter Email"
            ></TextInput>
          </View>
          <View style={styles.pw}>
            <TextInput
              style={styles.input}
              placeholder="Enter Password"
            ></TextInput>
          </View>
          <View style={styles.create}>
            <Button color="black" title="Create account"></Button>
          </View>
          <View style={styles.end}>
            <Text style={styles.an_account}>Already have an account?</Text>
            <Text
              style={styles.submit}
              onPress={() => navigation.navigate("Signin")}
            >
              Sign in
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Signup;
