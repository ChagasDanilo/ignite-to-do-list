import { View, Image } from "react-native";

import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../../images/Logo.png")} />
    </View>
  );
}
