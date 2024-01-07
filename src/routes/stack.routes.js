import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { tema } from "../components";
import {
	Cadastro,
	CadastroCliente,
	CadastroClienteFinal,
	CadastroCuidador,
	CadastroCuidadorFinal,
	CadastroEstabelecimento,
	CadastroEstabelecimento2,
	CadastroEstabelecimento3,
	CadastroFreelancer,
	CadastroProprietario,
	CadastroProprietarioFinal,
	CadastroVeterinario,
	CadastroVeterinarioFinal,
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
				name="CadastroClienteFinal"
				component={CadastroClienteFinal}
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
				name="CadastroProprietarioFinal"
				component={CadastroProprietarioFinal}
				options={{
					headerTitle: "",
					headerStyle: {
						backgroundColor: "#FFFFFF",
					},
					headerTransparent: true,
				}}
			/>
			<Stack.Screen
				name="CadastroEstabelecimento"
				component={CadastroEstabelecimento}
				options={{
					headerTitle: "",
					headerStyle: {
						backgroundColor: "#FFFFFF",
					},
					headerTransparent: true,
				}}
			/>
			<Stack.Screen
				name="CadastroEstabelecimento2"
				component={CadastroEstabelecimento2}
				options={{
					headerTitle: "",
					headerStyle: {
						backgroundColor: "#FFFFFF",
					},
					headerTransparent: true,
				}}
			/>
			<Stack.Screen
				name="CadastroEstabelecimento3"
				component={CadastroEstabelecimento3}
				options={{
					headerTitle: "",
					headerStyle: {
						backgroundColor: "#FFF",
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
				name="CadastroVeterinarioFinal"
				component={CadastroVeterinarioFinal}
				options={{
					headerTitle: "",
					headerStyle: {
						backgroundColor: "#FFFFFF",
					},
					headerTransparent: true,
				}}
			/>
			<Stack.Screen
				name="CadastroCuidador"
				component={CadastroCuidador}
				options={{
					headerTitle: "",
					headerStyle: {
						backgroundColor: "#FFFFFF",
					},
					headerTransparent: true,
				}}
			/>
			<Stack.Screen
				name="CadastroCuidadorFinal"
				component={CadastroCuidadorFinal}
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
