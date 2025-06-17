import {
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../constants/theme";
import { Image } from "expo-image";
import { usePathname } from "expo-router";

const Login = () => {
  const { width } = useWindowDimensions();
  const pathname = usePathname();
  console.log("Current Pathname:", pathname);
  const styles = getStyles(width);
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.content}>
        <View style={styles.topView}>
          <Image
            contentFit="contain"
            source={require("../../assets/Logo.svg")}
            style={{
              width: 35,
              height: 55,
            }}
          />
          <View style={styles.welcomeWrapper}>
            <Text style={styles.welcomeText}>Welcome back</Text>
            <Text style={styles.welcomeSubText}>
              Create an account or log in to explore the app
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              padding: 2,
              gap: 12,
              width: "100%",
              backgroundColor: "#F8F9FA",
            }}
          >
            <Pressable
              style={{
                flex: 1,
                alignItems: "center",
                paddingVertical: 12,
              }}
            >
              <Text>Sign Up</Text>
            </Pressable>
            <Pressable
              style={{
                flex: 1,
                backgroundColor: "white",
                alignItems: "center",
                paddingVertical: 12,
              }}
            >
              <Text>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const getStyles = (width: number) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      paddingTop: 14,
      alignItems: "center",
      backgroundColor: theme.colors.white,
    },
    content: {
      flex: 1,
      width: width - 48,
      gap: 24,
    },
    topView: { alignItems: "center", gap: 24 },
    welcomeWrapper: {
      justifyContent: "center",
      alignItems: "center",
      gap: 12,
    },
    welcomeText: {
      fontSize: 32,
      color: "#19213D",
      fontFamily: theme.fonts.bold,
    },
    welcomeSubText: {
      fontFamily: theme.fonts.regular,
      color: theme.colors.grey,
      paddingHorizontal: 63,
      fontSize: 14,
      textAlign: "center",
    },
  });
