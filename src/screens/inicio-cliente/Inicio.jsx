import { StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";

import { Text } from "../../components";
const Inicio = () => {
	return (
		<SafeAreaView>
			<Text>Inicio</Text>
			<MapView
				style={styles.map}
				initialRegion={{
					latitude: -19.90,
					longitude: -43.96,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
			></MapView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	map: {
		width: "100%",
		height: "100%",
	},
});
export default Inicio;
