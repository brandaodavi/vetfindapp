import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";

import { Button, Container, Input, PerfilHeader } from "../../components";

const CadastroVeterinario = ({ navigation }) => {
	const [nome, setNome] = useState(null);
	const [crmv, setCrmv] = useState(null);
	const [uf, setUf] = useState(null);
	const [telefone, setTelefone] = useState(null);

	const validarDados = () => {
		if (nome === null || telefone === null || crmv === null || uf === null) {
			console.log("Campos inseridos incorretamente");
			return;
		}

		navigation.navigate("CadastroVeterinario2");
	};
	return (
		<Container>
			<KeyboardAvoidingView behavior="position">
				<PerfilHeader title="Veterinário Freelancer" icon="user-md" size={80}></PerfilHeader>
				<Input
					label="Nome"
					placeholder="Insira o seu nome"
					value={nome}
					onChangeText={setNome}
					keyboardType="default"
				/>
				<Input
					label="CRMV"
					placeholder="999999"
					value={crmv}
					onChangeText={setCrmv}
					keyboardType="numeric"
				/>
				<Input
					label="UF"
					placeholder="Insira a Unidade Federativa"
					value={uf}
					onChangeText={setUf}
					keyboardType="default"
				/>
				<Input
					label="Telefone"
					placeholder="Insira o seu telefone"
					value={telefone}
					onChangeText={setTelefone}
					keyboardType="numeric"
				/>
			</KeyboardAvoidingView>
			<Button margin="40px auto 0px auto" title="Continuar" onPress={validarDados} />
		</Container>
	);
};

export default CadastroVeterinario;
