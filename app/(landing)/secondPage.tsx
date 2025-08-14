import { styles } from "@/styles/landing-styles";
import { useNavigation } from "@react-navigation/native"; // <-- change here
import { Text, TouchableOpacity, View } from "react-native";

export default function SecondPage() {
  const navigation = useNavigation(); // <-- change here

  return (
    <View style={styles.container}>
      <View style={styles.skeleton} />
      <Text style={styles.title}>Second Screen on Startup</Text>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.buttonOutline}>
          <Text style={styles.textSecondary}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonPrimary}>
          <Text style={styles.textPrimary}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
