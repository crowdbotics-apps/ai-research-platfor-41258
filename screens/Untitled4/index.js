import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled4 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={() => {
        navigation.navigate("ScreenAI3");
      }}><Text style={styles.TEExwggF}>{"My Reports"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI6");
      }}><Text style={styles.uWhWXJcU}>{"Specific Report screen"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI7");
      }}><Text style={styles.kiYBMifg}>{"Post"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI31");
      }}><Text style={styles.BChURdVE}>{"Generated Content"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI9");
      }}><Text style={styles.bTjUClmm}>{"Notifications"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI10");
      }}><Text style={styles.EyUWJMmf}>{"Settings"}</Text></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  TEExwggF: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  uWhWXJcU: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  kiYBMifg: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  BChURdVE: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  bTjUClmm: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  EyUWJMmf: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled4;