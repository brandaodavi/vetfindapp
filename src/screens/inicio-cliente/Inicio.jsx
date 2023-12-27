import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";

import { Text } from "../../components";
const Inicio = () => {
	const [origem, setOrigem] = useState(null);
	const [destino, setDestino] = useState(null);

	useEffect(() => {
		(async function () {
			const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
			if (status === "granted") {
				let localizacao = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
				setOrigem({
					latitude: localizacao.coords.latitude,
					longitude: localizacao.coords.longitude,
					latitudeDelta: 0.00922,
					longitudeDelta: 0.00421,
				});
			} else {
				throw new Error("Localização não fornecida");
			}
		})();
	}, []);

	return (
		<SafeAreaView>
			<Text>Inicio</Text>
			<MapView
				style={styles.map}
				initialRegion={origem}
				showsUserLocation={true}
				loadingEnabled={true}
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
