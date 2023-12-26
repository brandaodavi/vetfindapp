import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";

import { Button, Container, Input, PerfilHeader } from "../../components";
import { checarCampos } from "../../functions";

const CadastroVeterinario = ({ navigation }) => {
	const [nome, setNome] = useState(null);
	const [crmv, setCrmv] = useState(null);
	const [uf, setUf] = useState(null);
	const [telefone, setTelefone] = useState(null);

	const encaminharCampos = () => {
		checarCampos(nome, crmv, uf, telefone) ? navigation.navigate("CadastroVeterinarioFinal") : "";
	};
	return (
		<Container>
			<KeyboardAvoidingView behavior="position">
				<PerfilHeader title="Veterinário Freelancer" icon="user-md" size={80} />
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
			<Button margin="10% auto 0 auto" title="Continuar" onPress={encaminharCampos} />
		</Container>
	);
};

export default CadastroVeterinario;
