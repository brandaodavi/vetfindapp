import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";

import { Button, Container, Input, PerfilHeader } from "../../components";
import { checarCampos } from "../../functions";

const CadastroCuidador = ({ navigation }) => {
	const [nome, setNome] = useState(null);
	const [cpf, setCpf] = useState(null);
	const [cep, setCep] = useState(null);
	const [telefone, setTelefone] = useState(null);

	const encaminharCampos = () => {
		checarCampos(nome, cpf, cep, telefone) ? navigation.navigate("CadastroCuidadorFinal") : "";
	};

	return (
		<Container>
			<KeyboardAvoidingView behavior="position">
				<PerfilHeader title="Cuidador" icon="house-user" size={80} />
				<Input
					label="Nome"
					placeholder="Insira o seu nome"
					value={nome}
					onChangeText={setNome}
					keyboardType="default"
				/>
				<Input
					label="CEP"
					placeholder="Insira o seu CEP"
					value={cep}
					onChangeText={setCep}
					keyboardType="numeric"
				/>
				<Input
					label="CPF"
					placeholder="Insira o seu CPF"
					value={cpf}
					onChangeText={setCpf}
					keyboardType="numeric"
				/>
				<Input
					label="Telefone"
					placeholder="Insira o seu telefone"
					value={telefone}
					onChangeText={setTelefone}
					keyboardType="numeric"
				/>
			</KeyboardAvoidingView>
			<Button margin="10% auto 0 auto" title="Continuar" onPress={encaminharCampos} />
		</Container>
	);
};

export default CadastroCuidador;
