import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";

import { Button, Container, Input, PerfilHeader } from "../../components";
import { checarCampos } from "../../functions";

const CadastroProprietario = ({ navigation }) => {
	const [nomeProprietario, setNomeProprietario] = useState(null);
	const [emailProprietario, setEmailProprietario] = useState(null);
	const [telefoneProprietario, setTelefoneProprietario] = useState(null);

	const encaminharCampos = () => {
		checarCampos(nomeProprietario, emailProprietario, telefoneProprietario) ? navigation.navigate("Login") : "";
	};
	return (
		<Container>
			<KeyboardAvoidingView behavior="position">
				<PerfilHeader title="Perfil Proprietário" icon="store-alt" size={60}></PerfilHeader>
				<Input
					label="Nome"
					placeholder="Insira o seu nome"
					value={nomeProprietario}
					onChangeText={setNomeProprietario}
					keyboardType="default"
				/>
				<Input
					label="E-mail"
					placeholder="Insira o seu e-mail"
					value={emailProprietario}
					onChangeText={setEmailProprietario}
					keyboardType="email-address"
				/>
				<Input
					label="Telefone"
					placeholder="(99) 99999-9999"
					value={telefoneProprietario}
					onChangeText={setTelefoneProprietario}
					keyboardType="numeric"
				/>
			</KeyboardAvoidingView>
			<Button margin="35% auto 0 auto" title="Continuar" onPress={encaminharCampos} />
		</Container>
	);
};

export default CadastroProprietario;
