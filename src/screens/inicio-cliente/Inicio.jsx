import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { useEffect, useState } from "react";
import { Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";

import { Text } from "../../components";
const Inicio = () => {
	const [origem, setOrigem] = useState(null);
	const [destino, setDestino] = useState(null);

	useEffect(() => {
		(async function () {
			const { status } = await Permissions.askAsync(Permissions.LOCATION);
			if (status === "granted") {
				let localizacao = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
				const localizacaoUsuario = {
					latitude: localizacao.coords.latitude,
					longitude: localizacao.coords.longitude,
					latitudeDelta: 0.00922,
					longitudeDelta: 0.00421,
				};
				setOrigem(localizacaoUsuario);
				setDestino(localizacaoUsuario);
			} else {
				throw new Error("Localização não fornecida");
			}
		})();
	}, []);

	const exibirMarker = () => {
		return console.log("Logica de mostrar a rota do local aqui");
	};
	return (
		<SafeAreaView>
			<Text
				style={{
					position: "absolute",
					zIndex: 3,
					alignSelf: "center",
					textAlign: "center",
					top: "10%",
					borderRadius: 30,
					width: 250,
					height: 50,
					backgroundColor: "white",
				}}
			>
				Componente de Saudações aqui
			</Text>
			{origem && (
				<MapView
					style={{
						width: "100%",
						height: "100%",
					}}
					initialRegion={origem}
					showsUserLocation={true}
					loadingEnabled={true}
				>
					{destino && (
						<Marker
							coordinate={{
								latitude: destino.latitude,
								longitude: destino.longitude,
							}}
							title="Clinica veterinária"
							description="Bla bla bla"
							onPress={exibirMarker}
						>
							<Image
								source={require("../../../assets/img/marker/marker-clinica.png")}
								style={{ width: 40, height: 40 }}
							/>
						</Marker>
					)}
				</MapView>
			)}
		</SafeAreaView>
	);
};

export default Inicio;
