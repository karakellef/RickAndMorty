import React from "react";
import { StyleSheet, SafeAreaView, View, ImageBackground } from "react-native";

function Screen({ children, style }) {
  return (
    <ImageBackground
            style={styles.background}
            source={require("../assets/background.jpg")}>
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  view: {
    flex: 1,
  },
  background: {
    flex: 1,
  }
});

export default Screen;
