import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";

import { Button, Container, Input, PerfilHeader } from "../../components";

const CadastroProprietario = ({ navigation }) => {
	const [nome, setNome] = useState(null);
	const [email, setEmail] = useState(null);
	const [telefone, setTelefone] = useState(null);

	const validarDados = () => {
		if (nome === null || email === null || telefone === null) {
			console.log("Campos inseridos incorretamente");
			return;
		}

		navigation.navigate("Login");
	};
	return (
		<Container>
			<KeyboardAvoidingView behavior="position">
				<PerfilHeader title="Perfil Proprietário" icon="store-alt" size={60}></PerfilHeader>
				<Input
					label="Nome"
					placeholder="Insira o seu nome"
					value={nome}
					onChangeText={setNome}
					keyboardType="default"
				/>
				<Input
					label="E-mail"
					placeholder="Insira o seu e-mail"
					value={email}
					onChangeText={setEmail}
					keyboardType="email-address"
				/>
				<Input
					label="Telefone"
					placeholder="(99) 99999-9999"
					value={telefone}
					onChangeText={setTelefone}
					keyboardType="numeric"
				/>
			</KeyboardAvoidingView>
			<Button margin="150px auto 0px auto" title="Continuar" onPress={validarDados} />
		</Container>
	);
};

export default CadastroProprietario;
