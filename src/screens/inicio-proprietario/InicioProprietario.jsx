import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { tema } from "../../components";
import Card from "../../components/card/Card";
const InicioProprietario = () => {
	return (
		<SafeAreaView>
			<Image
				style={{
					left: "70%",
				}}
				source={require("../../../assets/img/image-background2.png")}
			/>
			<Image
				style={{
					right: "43%",
					top: "3%",
				}}
				source={require("../../../assets/img/background-image.png")}
			/>
			<Card
				top="45%"
				left="2%"
				title="Opções"
				icon="cog"
				iconColor={tema.cores.temaVerde.verdePrincipal}
				iconSize={60}
				gap="25px"
				onPress={() => console.log("Opcoes")}
			/>
			<Card
				top="45%"
				left="35%"
				title="Servico Premium"
				icon="money-check-alt"
				iconColor={tema.cores.temaVerde.verdePrincipal}
				iconSize={60}
				gap="25px"
				onPress={() => console.log("Servico Premium")}
			/>
			<Card
				top="45%"
				left="68%"
				title="Meus Relatórios"
				icon="check-circle"
				iconColor={tema.cores.temaVerde.verdePrincipal}
				iconSize={60}
				gap="25px"
				onPress={() => console.log("Meus Relatórios")}
			/>
			<Card
				top="70%"
				left="35%"
				title="Estabelecimentos"
				icon="store-alt"
				iconColor={tema.cores.temaVerde.verdePrincipal}
				iconSize={60}
				gap="25px"
				onPress={() => console.log("Estabelecimentos")}
			/>
		</SafeAreaView>
	);
};

export default InicioProprietario;
