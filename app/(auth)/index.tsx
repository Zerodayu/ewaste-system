import { styles } from "@/styles/landing-styles";
import { useRouter } from "expo-router";
import { ChevronRight } from "lucide-react-native";
import { Text, TextInput, TouchableOpacity, View } from "react-native";


export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" style={styles.input} />
      <Text style={styles.title}>Login Screen</Text>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonOutline}>
          <Text style={styles.textSecondary}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={() => router.push("./secondPage")}
        >
          <Text style={styles.textPrimary}>Next</Text>
          <ChevronRight size={20}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}
