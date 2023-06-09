import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, Alert } from 'react-native';

const App = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const handleDeleteAccount = () => {
    Alert.alert('Delete Account', 'Are you sure you want to delete your account?', [{
      text: 'Cancel',
      style: 'cancel'
    }, {
      text: 'Delete',
      style: 'destructive'
    }]);
  };

  const handleLogout = () => {
    Alert.alert('Log Out', 'Are you sure you want to log out?', [{
      text: 'Cancel',
      style: 'cancel'
    }, {
      text: 'Log Out',
      style: 'destructive'
    }]);
  };

  return <View style={_styles.stRjjeLN}>
      <View style={_styles.YaIsZeTk}>
        <Text style={_styles.cQozOvKK}>Notifications</Text>
        <Switch trackColor={{
        false: '#767577',
        true: '#81b0ff'
      }} thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} value={isEnabled} />
      </View>
      <TouchableOpacity style={_styles.meiDxely}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI11");
      }}><Text style={_styles.nWwbRwBS}>Account Information</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={_styles.KOnJrIjc}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI12");
      }}><Text style={_styles.VWHYbcAA}>Send Feedback</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={_styles.HxZHNdxO}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI13");
      }}><Text style={_styles.dJOzlALm}>Change Password</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDeleteAccount} style={_styles.asHDoowe}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI14");
      }}><Text style={_styles.qrMomDip}>Delete Account</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogout} style={_styles.ZpwLtFJT}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI15");
      }}><Text style={_styles.rCYUUGmr}>Log Out</Text></Pressable>
      </TouchableOpacity>
    </View>;
};

export default App;

const _styles = StyleSheet.create({
  stRjjeLN: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  YaIsZeTk: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  cQozOvKK: {
    fontSize: 18,
    marginRight: 10
  },
  meiDxely: {
    backgroundColor: "#2196F3",
    padding: 10,
    marginBottom: 10
  },
  nWwbRwBS: {
    color: "white",
    fontSize: 18
  },
  KOnJrIjc: {
    backgroundColor: "#2196F3",
    padding: 10,
    marginBottom: 10
  },
  VWHYbcAA: {
    color: "white",
    fontSize: 18
  },
  HxZHNdxO: {
    backgroundColor: "#2196F3",
    padding: 10,
    marginBottom: 10
  },
  dJOzlALm: {
    color: "white",
    fontSize: 18
  },
  asHDoowe: {
    backgroundColor: "#f44336",
    padding: 10,
    marginBottom: 10
  },
  qrMomDip: {
    color: "white",
    fontSize: 18
  },
  ZpwLtFJT: {
    backgroundColor: "#f44336",
    padding: 10
  },
  rCYUUGmr: {
    color: "white",
    fontSize: 18
  }
});