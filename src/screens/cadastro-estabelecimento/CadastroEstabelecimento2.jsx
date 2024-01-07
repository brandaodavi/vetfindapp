import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";

import { Button, Container, Input, PerfilHeader } from "../../components";
import { checarCampos } from "../../functions";

const CadastroEstabelecimento2 = ({ navigation }) => {
	const encaminharCampos = () => {
		checarCampos(cep, logradouro, numero) ? navigation.navigate("CadastroEstabelecimento2") : "";
	};
	const [cep, setCep] = useState(undefined);
	const [logradouro, setLogradouro] = useState(undefined);
	const [complemento, setComplemento] = useState(undefined);
	const [numero, setNumero] = useState(undefined);
	return (
		<Container>
			<KeyboardAvoidingView behavior="position">
				<PerfilHeader title="Sobre o estabelecimento" icon="store-alt" size={60} />
				<Input
					label="CEP"
					placeholder="Insira o CEP"
					value={cep}
					onChangeText={setCep}
					keyboardType="numeric"
				/>
				<Input
					label="Logradouro"
					placeholder="Insira o logradouro"
					value={logradouro}
					onChangeText={setLogradouro}
					keyboardType="default"
				/>
				<Input
					label="Complemento"
					placeholder="Insira o complemento"
					value={complemento}
					onChangeText={setComplemento}
					keyboardType="default"
				/>
				<Input
					label="Número"
					placeholder="Insira o número"
					value={numero}
					onChangeText={setNumero}
					keyboardType="numeric"
				/>
			</KeyboardAvoidingView>
			<Button margin="20% auto 0 auto" title="Continuar" onPress={encaminharCampos} />
		</Container>
	);
};

export default CadastroEstabelecimento2;
