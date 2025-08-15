import { COLORS } from "@/styles/themes";
import { StyleSheet } from "react-native";

export const sBtn = StyleSheet.create({
    primary: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary,
        paddingHorizontal: 22,
        padding: 12,
        borderRadius: 8,
    },
    secondary: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: COLORS.primary,
        paddingHorizontal: 20,
        padding: 12,
        borderRadius: 8,
    },
    ghost: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        paddingHorizontal: 20,
        padding: 12,
    },
    destructive: {
        backgroundColor: COLORS.destructive,
        padding: 12,
        borderRadius: 8,
    }
})