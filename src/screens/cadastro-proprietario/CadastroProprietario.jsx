import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";

import { Button, Container, Input, PerfilHeader } from "../../components";
import { checarCampos } from "../../functions";

const CadastroProprietario = ({ navigation }) => {
	const [nome, setNome] = useState(null);
	const [cpf, setCpf] = useState(null);
	const [telefone, setTelefone] = useState(null);

	const encaminharCampos = () => {
		checarCampos(nome, cpf, telefone) ? navigation.navigate("CadastroProprietarioFinal") : "";
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
					label="CPF"
					placeholder="Insira o seu CPF"
					value={cpf}
					onChangeText={setCpf}
					keyboardType="numeric"
				/>
				<Input
					label="Telefone"
					placeholder="(99) 99999-9999"
					value={telefone}
					onChangeText={setTelefone}
					keyboardType="numeric"
				/>
			</KeyboardAvoidingView>
			<Button margin="35% auto 0 auto" title="Continuar" onPress={encaminharCampos} />
		</Container>
	);
};

export default CadastroProprietario;
