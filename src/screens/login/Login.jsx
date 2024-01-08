import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image } from "react-native";
import { KeyboardAvoidingView } from "react-native";

import { Button, Input, tema, Text, textTypes } from "../../components/index";
import { usuarios } from "../../data/usuarios";
import { Container } from "./login.style";

const Login = ({ navigation }) => {
	const [usuario, setUsuario] = useState(null);
	const [senha, setSenha] = useState(null);

	const autorizarLogin = (email, senha) => {
		const usuario = usuarios.find((usuario) => usuario.email === email);
		if (usuario && usuario.senha === senha) {
			navigation.navigate("TabBar", { tipoUsuario: usuario.tipo });
			setSenha(null);
			setUsuario(null);
		} else {
			console.log("Dados inválidos");
		}
	};
	return (
		<Container>
			<Image
				style={{
					width: 200,
					height: 100,
					marginLeft: "auto",
					marginRight: "auto",
					marginTop: "10%",
					marginBottom: "30%",
				}}
				source={require("../../../assets/img/logo.png")}
			/>
			<KeyboardAvoidingView behavior="position">
				<Input
					label="Usuário"
					placeholder="Insira o usuário"
					keyboardType="email-address"
					value={usuario}
					onChangeText={setUsuario}
				/>
				<Input
					label="Senha"
					placeholder="Insira a senha"
					secureTextEntry={true}
					value={senha}
					onChangeText={setSenha}
				/>
				<Text margin="auto" onPress={() => console.log(senha)}>
					Esqueci a minha senha
				</Text>
				<Button margin="10% auto" title="Entrar" onPress={() => autorizarLogin(usuario, senha)} />
			</KeyboardAvoidingView>
			<Text margin="30% auto 1% auto" type={textTypes.SMALL_BOLD}>
				Não possui conta no VetFind?
			</Text>
			<Text
				margin="0 auto"
				type={textTypes.SMALL_BOLD}
				onPress={() => {
					navigation.navigate("Cadastro");
				}}
			>
				Cadastre-se agora!ㅤ
				<FontAwesome
					name="external-link"
					size={20}
					color={tema.cores.temaVerde.verdePrincipal}
				></FontAwesome>
			</Text>
		</Container>
	);
};

export default Login;
