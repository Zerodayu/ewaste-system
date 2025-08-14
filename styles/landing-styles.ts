import { StyleSheet } from "react-native";
import { COLORS } from "../themes/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        gap: 16,
    },
    skeleton: {
        width: 300,
        height: 300,
        backgroundColor: COLORS.muted,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 16,
    },
    footer: {
        flexDirection: "row",
        position: "absolute",
        width: "100%",
        paddingHorizontal: 16,
        bottom: 40,
        gap: 16,
        alignItems: "center",
        justifyContent: "flex-end",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: COLORS.foreground,
    },
    buttonPrimary: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary,
        paddingHorizontal: 20,
        padding: 12,
        borderRadius: 8,
    },
    buttonSecondary: {
        backgroundColor: COLORS.secondary,
        padding: 12,
        borderRadius: 8,
    },
    buttonDestructive: {
        backgroundColor: COLORS.destructive,
        padding: 12,
        borderRadius: 8,
    },
    buttonOutline: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: COLORS.accent,
        paddingHorizontal: 20,
        padding: 12,
        borderRadius: 8,
    },
    textPrimary: {
        color: COLORS.background,
        fontWeight: "bold",
    },
    textSecondary: {
        color: COLORS.primary,
        fontWeight: "bold",
    },
})