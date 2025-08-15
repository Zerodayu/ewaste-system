import { COLORS } from "@/styles/themes";
import { StyleSheet } from "react-native";

export const sText = StyleSheet.create({
    primary: {
        color: COLORS.primary,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
    },
    mono: {
        color: COLORS.muted,
        fontWeight: "bold",
        fontFamily: "monospace",
        alignItems: "center",
        justifyContent: "center",
    },
    link: {
        color: COLORS.primary,
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textAlign: "center",
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
    },
    black: {
        color: COLORS.black,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
    },
    white: {
        color: COLORS.white,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
    },
})