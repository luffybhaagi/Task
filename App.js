import { AppLoading } from 'expo';
import { Camera } from 'expo-camera';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Root } from 'native-base';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigations from "./src/Navigators/Navigations";


export default function App() {

  let [fontsloaded] = useFonts({
    "Avenir-Medium": require("./Fonts/Avenir-Medium.ttf"),
    "Avenir-Roman": require("./Fonts/Avenir-Roman.otf"),
    "Avenir-Heavy": require("./Fonts/AEH.ttf"),
    Roboto_medium: require("./Fonts/Roboto-Medium.ttf"),
    "Avenir-Black": require("./Fonts/Avenir-Black.otf"),
  });
  if (!fontsloaded) {
    return <AppLoading />;
  }

  return (
      <Root>
        <Navigations />
      </Root>
  );
}
