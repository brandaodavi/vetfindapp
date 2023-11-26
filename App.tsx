import { SafeAreaView } from "react-native-safe-area-context";

import Input from "./src/components/input/Input";
export default function App() {
	return (
		<SafeAreaView>
			<Input label="Usuário" placeholder="Insira o usuário"></Input>
		</SafeAreaView>
	);
}
