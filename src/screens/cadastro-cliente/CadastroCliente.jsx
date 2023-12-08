import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";

import { Button, Container, Input, PerfilHeader } from "../../components";

const CadastroCliente = ({ navigation }) => {
	const [nome, setNome] = useState(null);
	const [email, setEmail] = useState(null);
	const [cep, setCep] = useState(null);

	const validarDados = () => {
		if (nome === null || email === null || cep === null) {
			console.log("Campos inseridos incorretamente");
			return;
		}

		navigation.navigate("Login");
	};
	return (
		<Container>
			<KeyboardAvoidingView behavior="position">
				<PerfilHeader title="Perfil Cliente" icon="user-circle" size={80}></PerfilHeader>
				<Input label="Nome" placeholder="Insira o seu nome" value={nome} onChangeText={setNome} />
				<Input
					label="E-mail"
					placeholder="Insira o seu e-mail"
					value={email}
					onChangeText={setEmail}
					keyboardType="email-address"
				/>
				<Input
					label="CEP"
					placeholder="Insira o seu CEP"
					value={cep}
					onChangeText={setCep}
					keyboardType="numeric"
				/>
			</KeyboardAvoidingView>
			<Button margin="150px auto 0px auto" title="Continuar" onPress={validarDados} />
		</Container>
	);
};

export default CadastroCliente;
