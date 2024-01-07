import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";

import { Button, Container, Input, Text, textTypes } from "../../components";
import { checarCampos } from "../../functions";

const CadastroEstabelecimento2 = ({ navigation }) => {
	const encaminharCampos = () => {
		checarCampos(cep, logradouro, numero, bairro)
			? navigation.navigate("CadastroEstabelecimento3")
			: "";
	};
	const [cep, setCep] = useState(undefined);
	const [logradouro, setLogradouro] = useState(undefined);
	const [bairro, setBairro] = useState(undefined);
	const [numero, setNumero] = useState(undefined);
	return (
		<Container>
			<KeyboardAvoidingView behavior="position">
				<Text margin="24% auto 20% auto" type={textTypes.TITLE_REGULAR}>
					Sobre o estabelecimento
				</Text>
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
					label="Número"
					placeholder="Insira o número"
					value={numero}
					onChangeText={setNumero}
					keyboardType="numeric"
				/>
				<Input
					label="Bairro"
					placeholder="Insira o bairro"
					value={bairro}
					onChangeText={setBairro}
					keyboardType="default"
				/>
			</KeyboardAvoidingView>
			<Button margin="25% auto 0 auto" title="Continuar" onPress={encaminharCampos} />
		</Container>
	);
};

export default CadastroEstabelecimento2;
