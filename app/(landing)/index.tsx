import { styles } from "@/styles/landing-styles";
import { useRouter } from "expo-router";
import { ChevronRight } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";


export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.skeleton} />
      <Text style={styles.title}>First Screen on Startup</Text>

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
