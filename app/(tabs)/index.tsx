import { COLORS } from "@/themes";
import { History, MapPinned, ScanSearch, Sparkle, Target } from 'lucide-react-native';
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.body}>

      {/* header */}
      <View style={styles.headerBox}> 
        <View style={styles.HeaderTitle}> 
          <Target size={25} color={COLORS.text} />
          <Text style={styles.header}>AppName</Text> 
        </View>
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPIDVRt_Urc9z-y4fGrOmRV7DZQTztfc95Qw&s' }} style={styles.pfp} />
      </View>

      {/* content */}
      <View style={styles.contentBox}>
        <Text style={styles.helloTxt}>Hello User</Text>
        <Text style={styles.secondaryText}>Whats the plan for today?</Text>
      </View>

      {/* bento box */}
      <View style={styles.masonryBox}>
        <View style={styles.masonryRow}>

          <View style={styles.masonryBtn1}>
            <View style={styles.iconContainer}>
              <Sparkle size={25} color={COLORS.text} />
            </View>
            <View>
              <Text style={styles.text}>Total Points:</Text>
              <Text style={styles.points}>100</Text>
            </View>
          </View>

          <View style={styles.columnContainer}>
            <View style={styles.masonryBtn2}>
              <View style={styles.iconContainer}>
                <MapPinned size={25} color={COLORS.text} />
              </View>
              <Text style={styles.text}>Scan nearest shop</Text>
            </View>
            <View style={styles.masonryBtn3}>
              <View style={styles.iconContainer}>
                <ScanSearch size={25} color={COLORS.text} />
              </View>
              <Text style={styles.text}>Search by image</Text>
            </View>
          </View>
        </View>
      </View>

      {/* footer */}
      <View style={styles.footerBox}>
        <View style={styles.footerHead}>
          <View style={styles.headBox}>
            <History size={25} color={COLORS.text} />
            <Text style={styles.footerTitle}>Recent Activity</Text>
          </View>
          <Text style={styles.footerText}>See All</Text>
        </View>
        
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
    fontFamily: "monospace",
    fontWeight: 'bold',
  },
  secondaryText: {
    color: COLORS.accent,
    fontFamily: "monospace",
  },
  header: {
    color: COLORS.text,
    fontFamily: "monospace",
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 1.5,
  },
  points: {
    color: COLORS.accent,
    fontWeight: 'bold',
    fontSize: 30,
    letterSpacing: 2,
  },
  helloTxt: {
    color: COLORS.text,
    fontFamily: "monospace",
    fontWeight: 'bold',
    fontSize: 30,
    letterSpacing: 1.5,
  },
  footerTitle: {
    color: COLORS.text,
    fontFamily: "monospace",
    fontWeight: 'bold',
    fontSize: 16,
  },
  footerText: {
    color: COLORS.text + '80',
    fontFamily: "monospace",
  },
  headerBox: {
    borderWidth: 1,
    borderColor: COLORS.accent,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    flex: 0.1,
  },
  HeaderTitle: {
    flexDirection: 'row',
    gap: 10,
  },
  pfp: {
    borderWidth: 1.5,
    borderColor: COLORS.accent,
    borderRadius: 100,
    width: 45,
    height: 45 
  },
  contentBox: {
    flex: 0.1,
    borderWidth: 1,
    borderColor: COLORS.accent,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  masonryBox: {
    flex: 0.4,
    borderWidth: 1,
    borderColor: COLORS.accent,
    padding: 20,
  },
  masonryRow: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  columnContainer: {
    flex: 1,
    gap: 10,
  },
  masonryBtn1: {
    backgroundColor: COLORS.accent + '20',
    padding: 20,
    justifyContent: "space-between",
  },
  masonryBtn2: {
    flex: 1,
    backgroundColor: COLORS.secondary + '20',
    padding: 10,
    gap: 20,
    justifyContent: "space-between",
  },
  masonryBtn3: {
    flex: 1,
    backgroundColor: COLORS.primary + '20',
    padding: 10,
    gap: 20,
    justifyContent: "space-between",
  },
  iconContainer: {
    padding: 15,
    borderRadius: 100,
    alignSelf: 'flex-start',
    backgroundColor: COLORS.text + '50',
  },
  footerBox: {
    flex: 2.5,
  },
  footerHead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  }
})


