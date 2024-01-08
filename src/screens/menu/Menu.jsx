import { useNavigation } from "@react-navigation/native";

import { Card, tema } from "../../components";

const Menu = () => {
	const navigation = useNavigation();
	return (
		<>
			<Card
				width="25%"
				height="100px"
				top="35%"
				left="35%"
				title="Sair"
				icon="sign-out-alt"
				iconColor={tema.cores.temaVerde.verdePrincipal}
				iconSize={50}
				gap="5px"
				onPress={() => {
					navigation.navigate("Login");
				}}
			></Card>
		</>
	);
};

export default Menu;
