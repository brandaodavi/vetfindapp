import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { tema } from "../components";
import {
	Cadastro,
	CadastroCliente,
	CadastroFreelancer,
	CadastroProprietario,
	CadastroVeterinario,
	CadastroVeterinario2,
	Login,
} from "../screens";
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
			<Stack.Screen
				name="CadastroProprietario"
				component={CadastroProprietario}
				options={{
					headerTitle: "",
					headerStyle: {
						backgroundColor: "#FFFFFF",
					},
					headerTransparent: true,
				}}
			/>
			<Stack.Screen
				name="CadastroFreelancer"
				component={CadastroFreelancer}
				options={{
					headerTitle: "",
					headerStyle: {
						backgroundColor: "#FFFFFF",
					},
					headerTransparent: true,
				}}
			/>
			<Stack.Screen
				name="CadastroVeterinario"
				component={CadastroVeterinario}
				options={{
					headerTitle: "",
					headerStyle: {
						backgroundColor: "#FFFFFF",
					},
					headerTransparent: true,
				}}
			/>
			<Stack.Screen
				name="CadastroVeterinario2"
				component={CadastroVeterinario2}
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
