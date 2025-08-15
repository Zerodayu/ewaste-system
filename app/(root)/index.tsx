import { COLORS } from "@/styles/themes";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.base}>
      <Text style={styles.text}>index</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: COLORS.background,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: COLORS.foreground,
    fontSize: 24,
    fontWeight: "bold",
  },
});