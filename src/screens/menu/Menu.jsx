import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Card } from "../../components";

const Menu = () => {
	const navigation = useNavigation();
	return (
		<SafeAreaView>
			<Card
				onPress={() => {
					navigation.navigate("Login");
				}}
			></Card>
		</SafeAreaView>
	);
};

export default Menu;
