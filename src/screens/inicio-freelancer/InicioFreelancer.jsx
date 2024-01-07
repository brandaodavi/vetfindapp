import { tema } from "../../components";
import Card from "../../components/card/Card";

const InicioFreelancer = () => {
	return (
		<>
			<Card
				top="40%"
				left="2%"
				title="Opções"
				icon="cog"
				iconColor={tema.cores.temaVerde.verdePrincipal}
				iconSize={60}
				gap="25px"
				onPress={() => console.log("Opcoes")}
			/>
			<Card
				top="40%"
				left="35%"
				title="Servico Premium"
				icon="money-check-alt"
				iconColor={tema.cores.temaVerde.verdePrincipal}
				iconSize={60}
				gap="25px"
				onPress={() => console.log("Servico Premium")}
			/>
			<Card
				top="40%"
				left="68%"
				title="Meus Relatórios"
				icon="check-circle"
				iconColor={tema.cores.temaVerde.verdePrincipal}
				iconSize={60}
				gap="25px"
				onPress={() => console.log("Meus Relatórios")}
			/>
		</>
	);
};

export default InicioFreelancer;
