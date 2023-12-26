import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";

import { Button, Container, Input, Text, textTypes } from "../../components";
import { checarCampos, checarCamposIguais } from "../../functions";

const CadastroClienteFinal = ({ navigation }) => {
	const [emailCliente, setEmailCliente] = useState(null);
	const [emailConfirmado, setEmailConfirmado] = useState(null);
	const [senhaCliente, setSenhaCliente] = useState(null);
	const [senhaConfirmada, setSenhaConfirmada] = useState(null);

	const encaminharCampos = () => {
		checarCampos(emailCliente, emailConfirmado, senhaCliente, senhaConfirmada) && checarCamposIguais(emailCliente, emailConfirmado) && checarCamposIguais(senhaCliente, senhaConfirmada)
			? navigation.navigate("TabBar")
			: "";
	};

	return (
		<Container>
			<KeyboardAvoidingView behavior="position">
				<Text margin="100px auto 70px auto" type={textTypes.TITLE_REGULAR}>
					Vamos criar o seu login!
				</Text>
				<Input
					label="E-mail"
					placeholder="Insira o seu e-mail"
					value={emailCliente}
					onChangeText={setEmailCliente}
					keyboardType="email-address"
				/>
				<Input
					label="Confirmar e-mail"
					placeholder="Confirme o seu e-mail"
					value={emailConfirmado}
					onChangeText={setEmailConfirmado}
					keyboardType="email-address"
				/>
				<Input
					label="Senha"
					placeholder="Insira a sua senha"
					value={senhaCliente}
					onChangeText={setSenhaCliente}
					secureTextEntry={true}
				/>
				<Input
					label="Confirmar senha"
					placeholder="Confirme a sua senha"
					value={senhaConfirmada}
					onChangeText={setSenhaConfirmada}
					secureTextEntry={true}
				/>
			</KeyboardAvoidingView>
			<Button margin="30% auto 0 auto" title="Cadastrar" onPress={encaminharCampos} />
		</Container>
	);
};

export default CadastroClienteFinal;
