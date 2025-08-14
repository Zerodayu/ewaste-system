import { StyleSheet } from "react-native";
import { COLORS } from "../themes/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: COLORS.foreground,
    },
    button: {
        backgroundColor: COLORS.primary,
        padding: 12,
        borderRadius: 8,
    },
    buttonText: {
        color: COLORS.background,
        fontWeight: "bold",
    },
})