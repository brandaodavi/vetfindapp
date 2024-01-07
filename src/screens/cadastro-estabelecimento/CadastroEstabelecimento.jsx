import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";

import { tema } from "../../components";
import { Button, Container, Input, Text, textTypes } from "../../components";
import { checarCampos } from "../../functions";

const CadastroEstabelecimento = ({ navigation }) => {
	const [tipo, setTipo] = useState(undefined);
	const [cnpj, setCnpj] = useState(undefined);
	const [abertura, setAbertura] = useState(undefined);
	const [encerramento, setEncerramento] = useState(undefined);
	const [nome, setNome] = useState(undefined);
	const encaminharCampos = () => {
		checarCampos(nome, tipo, abertura, encerramento)
			? navigation.navigate("CadastroEstabelecimento2")
			: "";
	};
	return (
		<Container>
			<KeyboardAvoidingView behavior="position">
				<Text margin="24% auto 15% auto" type={textTypes.TITLE_REGULAR}>
					Sobre o estabelecimento
				</Text>
				<Input
					label="Nome"
					placeholder="Insira o nome do estabelecimento"
					value={nome}
					onChangeText={setNome}
					keyboardType="default"
				/>
				<Picker
					style={{
						width: 200,
						backgroundColor: "transparent",
						position: "absolute",
						top: "41%",
						left: "23%",
						zIndex: 1,
						color: `${tema.cores.temaVerde.verdePrincipal}`,
					}}
					selectedValue={tipo}
					onValueChange={(itemValue) => setTipo(itemValue)}
				>
					<Picker.Item label="Selecione o tipo" value="" />
					<Picker.Item label="Clínica Veterinária" value="CLINICA VETERINARIA" />
					<Picker.Item label="Pet Shop" value="PET SHOP" />
					<Picker.Item label="Hotel Animal" value="HOTEL ANIMAL" />
				</Picker>
				<Input label="Tipo" editable={false} />
				<Input
					label="CNPJ"
					placeholder="Insira o CNPJ"
					value={cnpj}
					onChangeText={setCnpj}
					keyboardType="numeric"
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
				<Button margin="10% auto 0 auto" title="Continuar" onPress={encaminharCampos} />
			</KeyboardAvoidingView>
		</Container>
	);
};

export default CadastroEstabelecimento;
