import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";

import { Button, Container, Input, PerfilHeader } from "../../components";

const CadastroVeterinario = ({ navigation }) => {
	const [nome, setNome] = useState(null);
	const [crmv, setCrmv] = useState(null);
	const [uf, setUf] = useState(null);
	const [email, setEmail] = useState(null);

	const validarDados = () => {
		if (nome === null || email === null || crmv === null || uf === null) {
			console.log("Campos inseridos incorretamente");
			return;
		}

		navigation.navigate("CadastroCliente");
	};
	return (
		<Container>
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
						label="E-mail"
						placeholder="Insira seu e-mail"
						value={email}
						onChangeText={setEmail}
						keyboardType="email-address"
					/>
				</KeyboardAvoidingView>
				<Button margin="40px auto 0px auto" title="Continuar" onPress={validarDados} />
			</Container>
		</Container>
	);
};

export default CadastroVeterinario;
