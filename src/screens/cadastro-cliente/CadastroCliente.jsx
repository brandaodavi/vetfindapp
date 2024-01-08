import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";

import { Button, Container, Input, PerfilHeader } from "../../components";
import { checarCampos } from "../../functions";
const CadastroCliente = ({ navigation }) => {
	const [nomeCliente, setNomeCliente] = useState(null);
	const [emailCliente, setEmailCliente] = useState(null);
	const [cepCliente, setCepCliente] = useState(null);
	const encaminharCampos = () => {
		checarCampos(nomeCliente, emailCliente, cepCliente)
			? navigation.navigate("CadastroClienteFinal")
			: "";
	};
	return (
		<Container>
			<KeyboardAvoidingView behavior="position">
				<PerfilHeader title="Perfil Cliente" icon="user-circle" size={80}></PerfilHeader>
				<Input
					label="Nome"
					placeholder="Insira o seu nome"
					value={nomeCliente}
					onChangeText={setNomeCliente}
				/>
				<Input
					label="E-mail"
					placeholder="Insira o seu e-mail"
					value={emailCliente}
					onChangeText={setEmailCliente}
					keyboardType="email-address"
				/>
				<Input
					label="CEP"
					placeholder="Insira o seu CEP"
					value={cepCliente}
					onChangeText={setCepCliente}
					keyboardType="numeric"
				/>
			</KeyboardAvoidingView>
			<Button margin="35% auto 0 auto" title="Continuar" onPress={encaminharCampos} />
		</Container>
	);
};

export default CadastroCliente;
