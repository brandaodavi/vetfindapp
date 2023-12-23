import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";

import { Button, Container, Input, PerfilHeader } from "../../components";
import { checarCampos } from "../../functions/checarCampos";

const CadastroProprietario = ({ navigation }) => {
	const [nome, setNome] = useState(null);
	const [email, setEmail] = useState(null);
	const [telefone, setTelefone] = useState(null);

	const encaminharCampos = () => {
		checarCampos(nome, email, telefone) ? navigation.navigate("Login") : "";
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
			<Button margin="35% auto 0 auto" title="Continuar" onPress={encaminharCampos} />
		</Container>
	);
};

export default CadastroProprietario;
