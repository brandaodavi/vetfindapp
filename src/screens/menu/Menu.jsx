import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Text } from "../../components";

const Menu = () => {
	const navigation = useNavigation();
	return (
		<SafeAreaView>
			<Text
				onPress={() => {
					navigation.navigate("Login");
				}}
			>
				Menu
			</Text>
		</SafeAreaView>
	);
};

export default Menu;
