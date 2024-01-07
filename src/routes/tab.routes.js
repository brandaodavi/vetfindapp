import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { tema } from "../components";
import {
	Inicio,
	Menu,
	Perfil,
	PerfilFreelancer,
	PerfilProprietario,
	Pesquisa,
} from "../screens/index";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
	let corIcone;
	let tipoUsuario = "CLIENTE";
	const iconeInicio = {
		component: Inicio,
	};
	const segundoIcone = {
		name: "Pesquisa",
		icone: "search",
		component: Pesquisa,
	};
	const iconePerfil = {
		name: "Perfil",
		icone: "user-circle",
		component: Perfil,
	};
	const iconeMenu = {
		component: Menu,
	};

	if (tipoUsuario === "PROPRIETARIO") {
		segundoIcone.name = "Publicar";
		segundoIcone.icone = "plus";
		iconePerfil.icone = "store-alt";
		iconePerfil.component = PerfilProprietario;
	} else if (tipoUsuario === "VETERINARIO") {
		segundoIcone.name = "Publicar";
		segundoIcone.icone = "plus";
		iconePerfil.icone = "user-md";
		iconePerfil.component = PerfilFreelancer;
	} else if (tipoUsuario === "CLIENTE") {
		segundoIcone.icone = "search";
	} else if (tipoUsuario === "CUIDADOR") {
		segundoIcone.name = "Publicar";
		segundoIcone.icone = "plus";
		iconePerfil.icone = "user";
	}
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarActiveTintColor: `${tema.cores.temaCiano.ciano}`,
				tabBarInactiveTintColor: `${tema.cores.temaNeutro.branco}`,
				headerShown: false,
				tabBarStyle: {
					height: 60,
				},
				tabBarIconStyle: {
					marginTop: 5,
				},
				tabBarActiveBackgroundColor: `${tema.cores.temaVerde.verdePrincipal}`,
				tabBarInactiveBackgroundColor: `${tema.cores.temaVerde.verdePrincipal}`,
				tabBarLabelStyle: {
					fontSize: 14,
					marginBottom: 2,
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
				component={iconeInicio.component}
				options={{
					tabBarIcon: ({ focused }) => (
						focused
							? (corIcone = tema.cores.temaCiano.ciano)
							: (corIcone = tema.cores.temaNeutro.branco),
						(<FontAwesome5 name="home" color={corIcone} size={25} />)
					),
				}}
			/>
			<Tab.Screen
				name={segundoIcone.name}
				component={segundoIcone.component}
				options={{
					tabBarIcon: ({ focused }) => (
						focused
							? (corIcone = tema.cores.temaCiano.ciano)
							: (corIcone = tema.cores.temaNeutro.branco),
						(<FontAwesome5 name={segundoIcone.icone} color={corIcone} size={25} />)
					),
				}}
			/>
			<Tab.Screen
				name="Menu"
				component={iconeMenu.component}
				options={{
					tabBarIcon: ({ focused }) => (
						focused
							? (corIcone = tema.cores.temaCiano.ciano)
							: (corIcone = tema.cores.temaNeutro.branco),
						(<FontAwesome5 name="bars" color={corIcone} size={25} />)
					),
				}}
			/>
			<Tab.Screen
				name={iconePerfil.name}
				component={iconePerfil.component}
				options={{
					tabBarIcon: ({ focused }) => (
						focused
							? (corIcone = tema.cores.temaCiano.ciano)
							: (corIcone = tema.cores.temaNeutro.branco),
						(<FontAwesome5 name={iconePerfil.icone} color={corIcone} size={25} />)
					),
				}}
			/>
		</Tab.Navigator>
	);
}
