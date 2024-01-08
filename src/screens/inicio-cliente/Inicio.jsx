import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { useEffect, useState } from "react";
import { Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";

// import { Text } from "../../components";
import { prestadores } from "../../data/prestadores";

const Inicio = () => {
	const marcarMapa = (objeto) => {
		if (objeto.tipo === "CLINICA") {
			return require("../../../assets/img/marker/marker-clinica.png");
		} else if (objeto.tipo === "CUIDADOR") {
			return require("../../../assets/img/marker/marker-cuidador.png");
		} else if (objeto.tipo === "HOTEL") {
			return require("../../../assets/img/marker/marker-hotel.png");
		} else if (objeto.tipo === "PETSHOP") {
			return require("../../../assets/img/marker/marker-petshop.png");
		} else if (objeto.tipo === "VETERINARIO") {
			return require("../../../assets/img/marker/marker-veterinario.png");
		}
	};

	const [origem, setOrigem] = useState(null);
	// const [destino, setDestino] = useState(null);

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
				// setDestino(localizacaoUsuario);
			} else {
				throw new Error("Localização não fornecida");
			}
		})();
	}, []);

	// const exibirMarker = () => {
	// 	return console.log("Logica de mostrar a rota do local aqui");
	// };
	return (
		<SafeAreaView>
			{/* <Text
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
			</Text> */}
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
					{prestadores.map((prestador, index) => (
						<Marker
							key={index}
							coordinate={{
								latitude: prestador.latitude,
								longitude: prestador.longitude,
							}}
							title={prestador.nome + " " + prestador.sobrenome}
						>
							<Image source={marcarMapa(prestador)} style={{ width: 40, height: 40 }} />
						</Marker>
					))}
				</MapView>
			)}
		</SafeAreaView>
	);
};

export default Inicio;
