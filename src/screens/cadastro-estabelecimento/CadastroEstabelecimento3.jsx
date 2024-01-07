import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";

import { Button, Container, Input, Text, textTypes } from "../../components";
import { checarCampos } from "../../functions";

const CadastroEstabelecimento3 = ({ navigation }) => {
	const [telefoneEstabelecimento, setTelefoneEstabelecimento] = useState(undefined);
	const [emailEstabelecimento, setEmailEstabelecimento] = useState(undefined);
	return (
		<Container>
			<KeyboardAvoidingView>
				<Text margin="24% auto 40% auto" type={textTypes.TITLE_REGULAR}>
					Sobre o estabelecimento
				</Text>
				<Input
					label="Telefone"
					placeholder="Insira o telefone"
					value={telefoneEstabelecimento}
					onChangeText={setTelefoneEstabelecimento}
					keyboardType="numeric"
				/>
				<Input
					label="E-mail"
					placeholder="Insira o e-mail"
					value={emailEstabelecimento}
					onChangeText={setEmailEstabelecimento}
					keyboardType="email-address"
				/>
				<Button margin="25% auto 0 auto" title="Cadastrar" />
			</KeyboardAvoidingView>
		</Container>
	);
};

export default CadastroEstabelecimento3;
