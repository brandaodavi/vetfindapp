import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { tema } from "../components";
import { Cadastro, Login } from "../screens";
import CadastroCliente from "../screens/cadastro-cliente/CadastroCliente";
import TabRoutes from "./tab.routes";
const Stack = createNativeStackNavigator();

export default function StackRoutes() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerBackImageSource: require("../../assets/img/back-button.png"),
				headerStyle: {
					backgroundColor: `${tema.cores.temaVerde.verdePrincipal}`,
				},
			}}
		>
			<Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
			<Stack.Screen name="TabBar" component={TabRoutes} options={{ headerShown: false }} />
			<Stack.Screen
				name="Cadastro"
				component={Cadastro}
				options={{
					headerTitle: "",
					headerStyle: {
						backgroundColor: "#FFFFFF",
					},
					headerTransparent: true,
				}}
			/>
			<Stack.Screen
				name="CadastroCliente"
				component={CadastroCliente}
				options={{
					headerTitle: "",
					headerStyle: {
						backgroundColor: "#FFFFFF",
					},
					headerTransparent: true,
				}}
			/>
		</Stack.Navigator>
	);
}
