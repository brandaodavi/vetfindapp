import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import Routes from "./src/routes";

export default function App() {
	const [fontsLoaded] = useFonts({
		"Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
		"Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
		"Poppins-Italic": require("./assets/fonts/Poppins-Italic.ttf"),
		"Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
		"Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
		"Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
		"Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
		"Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
	});

	useEffect(() => {
		async function prepare() {
			await SplashScreen.preventAutoHideAsync();
		}
		prepare();
	}, []);

	if (!fontsLoaded) {
		return undefined;
	} else {
		SplashScreen.hideAsync();
	}

	return <Routes />;
}
