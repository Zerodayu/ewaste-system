import { COLORS } from "@/themes";
import { router } from 'expo-router';
import { ArrowRight, Cpu } from 'lucide-react-native';
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Second() {
  const nextPage = () => {
    router.push('/third');
  }

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <View style={styles.image}/>

        <View style={styles.titleContainer}>
          <View style={styles.iconTitleGroup}>
            <Cpu size={40} color={COLORS.white} />
            <View>
              <Text style={styles.header}>Title</Text>
              <Text style={styles.subTitle}>Subtitle - second page</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={nextPage}>
          <Text style={styles.buttonText}>Next</Text>
          <ArrowRight size={18} color={COLORS.white} />
        </Pressable>  
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: COLORS.background,
    flex: 1,
  },
  text: {
    color: COLORS.text,
    textAlign: 'center',
    fontFamily: "monospace",
    fontWeight: 'bold',
    fontSize: 16,
  },
  header: {
    color: COLORS.text,
    fontFamily: "monospace",
    fontWeight: 'bold',
    fontSize: 20,
  },
  subTitle: {
    color: COLORS.secondary,
    fontFamily: "monospace",
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: {
    backgroundColor: COLORS.accent + '50',
    alignSelf: 'center',
    height: 200,
    width: 300,
    marginBottom: 20,
  },
  container: {
    paddingHorizontal: 38,
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 0.1,
    justifyContent: 'center',
    marginBottom: 40,
    paddingHorizontal: 28,
  },
  button: {
    flexDirection: 'row',
    gap: 4,
    backgroundColor: COLORS.primary + '50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: COLORS.white,
    fontFamily: "monospace",
    fontWeight: 'bold',
  },
  iconTitleGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  titleContainer: {
    marginVertical: 20,
  },
})


