import { FontAwesome } from "@expo/vector-icons";
import { Image } from "react-native";
import { KeyboardAvoidingView } from "react-native";

import { Button, Input, tema, Text, textTypes } from "../../components/index";
import { LoginContainer } from "./login.style";

const Login = () => {
	return (
		<LoginContainer>
			<Image
				style={{
					width: 200,
					height: 100,
					marginLeft: "auto",
					marginRight: "auto",
					marginBottom: 100,
				}}
				source={require("../../../assets/img/logo.png")}
			/>
			<KeyboardAvoidingView behavior="position">
				<Input label="Usuário" placeholder="Insira o usuário" keyboardType="email-address" />
				<Input label="Senha" placeholder="Insira a senha" secureTextEntry={true} />
				<Text margin="auto" onPress={() => console.log("Esqueci a senha")}>
					Esqueci a minha senha
				</Text>
				<Button margin="50px auto" title="Entrar" onPress={() => console.log("Entrou")} />
			</KeyboardAvoidingView>
			<Text margin="80px auto 10px auto" type={textTypes.SMALL_BOLD}>
				Não possui conta no VetFind?
			</Text>
			<Text margin="0 auto" type={textTypes.SMALL_BOLD} onPress={() => console.log("Cadastrou")}>
				Cadastre-se agora!ㅤ
				<FontAwesome
					name="external-link"
					size={20}
					color={tema.cores.temaVerde.verdePrincipal}
				></FontAwesome>
			</Text>
		</LoginContainer>
	);
};

export default Login;
