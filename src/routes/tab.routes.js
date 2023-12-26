import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { tema } from "../components";
import { Inicio, Menu, Perfil, Pesquisa } from "../screens/index";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
	let corIcone;
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarActiveTintColor: `${tema.cores.temaCiano.ciano}`,
				tabBarInactiveTintColor: `${tema.cores.temaNeutro.branco}`,
				headerShown: false,
				tabBarStyle: {
					height: "100%",
				},
				tabBarActiveBackgroundColor: `${tema.cores.temaVerde.verdePrincipal}`,
				tabBarInactiveBackgroundColor: `${tema.cores.temaVerde.verdePrincipal}`,
				tabBarLabelStyle: {
					fontSize: 14,
				},
			}}
		>
			{/* <Tab.Screen
				name="Login"
				component={Login}
				options={{
					tabBarIcon: ({ size, focused }) => (
						focused
							? (corIcone = tema.cores.temaCiano.ciano)
							: (corIcone = tema.cores.temaNeutro.branco),
						(<FontAwesome name="map-marker" color={corIcone} size={size} />)
					),
				}}
			/>
			<Tab.Screen
				name="Cadastro"
				component={Cadastro}
				options={{
					tabBarIcon: ({ size, focused }) => (
						focused
							? (corIcone = tema.cores.temaCiano.ciano)
							: (corIcone = tema.cores.temaNeutro.branco),
						(<FontAwesome name="map" color={corIcone} size={size} />)
					),
				}}
			/> */}
			<Tab.Screen
				name="Inicio"
				component={Inicio}
				options={{
					tabBarIcon: ({ size, focused }) => (
						focused
							? (corIcone = tema.cores.temaCiano.ciano)
							: (corIcone = tema.cores.temaNeutro.branco),
						(<FontAwesome name="home" color={corIcone} size={size} />)
					),
				}}
			/>
			<Tab.Screen
				name="Pesquisa"
				component={Pesquisa}
				options={{
					tabBarIcon: ({ size, focused }) => (
						focused
							? (corIcone = tema.cores.temaCiano.ciano)
							: (corIcone = tema.cores.temaNeutro.branco),
						(<FontAwesome name="search" color={corIcone} size={size} />)
					),
				}}
			/>
			<Tab.Screen
				name="Menu"
				component={Menu}
				options={{
					tabBarIcon: ({ size, focused }) => (
						focused
							? (corIcone = tema.cores.temaCiano.ciano)
							: (corIcone = tema.cores.temaNeutro.branco),
						(<FontAwesome name="bars" color={corIcone} size={size} />)
					),
				}}
			/>
			<Tab.Screen
				name="Perfil"
				component={Perfil}
				options={{
					tabBarIcon: ({ size, focused }) => (
						focused
							? (corIcone = tema.cores.temaCiano.ciano)
							: (corIcone = tema.cores.temaNeutro.branco),
						(<FontAwesome name="user-circle" color={corIcone} size={size} />)
					),
				}}
			/>
		</Tab.Navigator>
	);
}
