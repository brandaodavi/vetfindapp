import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

import { tema } from "../../components";
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
			<Picker
				style={{
					width: 200,
					backgroundColor: `${tema.cores.temaNeutro.branco}`,
					position: "absolute",
					top: "38%",
					left: "23%",
					zIndex: 1,
					color: `${tema.cores.temaVerde.verdePrincipal}`,
				}}
				selectedValue={tipo}
				onValueChange={(itemValue) => setTipo(itemValue)}
			>
				<Picker.Item label="Clínica Veterinária" value="CLINICA VETERINARIA" />
				<Picker.Item label="Pet Shop" value="PET SHOP" />
				<Picker.Item label="Hotel Animal" value="HOTEL ANIMAL" />
			</Picker>
			<Input
				label="Tipo"
				placeholder="Insira o tipo do estabelecimento"
				value={tipo}
				onChangeText={setTipo}
				editable={false}
				keyboardType="default"
			/>
			<Input
				label="Abertura"
				placeholder="Insira o horário de abertura"
				value={abertura}
				onChangeText={setAbertura}
				keyboardType="numeric"
			/>
			<Input
				label="Encerramento"
				placeholder="Insira horário de encerramento"
				value={encerramento}
				onChangeText={setEncerramento}
				keyboardType="numeric"
			/>
			<Button margin="35% auto 0 auto" title="Continuar" onPress={encaminharCampos} />
		</Container>
	);
};

export default CadastroEstabelecimento;
