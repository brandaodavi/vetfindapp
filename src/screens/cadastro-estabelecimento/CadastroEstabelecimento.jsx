import { useState } from "react";

import { Button, Container, Input, PerfilHeader } from "../../components";
import { checarCampos } from "../../functions";

const CadastroEstabelecimento = ({ navigation }) => {
	const [tipo, setTipo] = useState(undefined);
	const [abertura, setAbertura] = useState(undefined);
	const [encerramento, setEncerramento] = useState(undefined);
	const encaminharCampos = () => {
		checarCampos(tipo, abertura, encerramento)
			? navigation.navigate("CadastroEstabelecimento2")
			: "";
	};
	return (
		<Container>
			<PerfilHeader title="Sobre o estabelecimento" icon="store-alt" size={60}></PerfilHeader>
			<Input
				label="Tipo"
				placeholder="Insira o tipo do estabelecimento"
				value={tipo}
				onChangeText={setTipo}
				keyboardType="default"
			/>
			<Input
				label="Abertura"
				placeholder="Insira o horário de abertura"
				value={abertura}
				onChangeText={setAbertura}
				keyboardType="default"
			/>
			<Input
				label="Encerramento"
				placeholder="Insira horário de encerramento"
				value={encerramento}
				onChangeText={setEncerramento}
				keyboardType="default"
			/>
			<Button margin="35% auto 0 auto" title="Continuar" onPress={encaminharCampos} />
		</Container>
	);
};

export default CadastroEstabelecimento;
