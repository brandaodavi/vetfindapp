import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";

import { tema } from "../../components";
import { Button, Container, Input, PerfilHeader } from "../../components";
import { checarCampos } from "../../functions";

const CadastroEstabelecimento = ({ navigation }) => {
	const [tipo, setTipo] = useState(undefined);
	const [cnpj, setCnpj] = useState(undefined);
	const [abertura, setAbertura] = useState(undefined);
	const [encerramento, setEncerramento] = useState(undefined);
	const encaminharCampos = () => {
		checarCampos(tipo, abertura, encerramento)
			? navigation.navigate("CadastroEstabelecimento2")
			: "";
	};
	return (
		<Container>
			<KeyboardAvoidingView behavior="position">
				<PerfilHeader title="Sobre o estabelecimento" icon="store-alt" size={60}></PerfilHeader>
				<Picker
					style={{
						width: 200,
						backgroundColor: "transparent",
						position: "absolute",
						top: "43.5%",
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
			</KeyboardAvoidingView>
			<Button margin="20% auto 0 auto" title="Continuar" onPress={encaminharCampos} />
		</Container>
	);
};

export default CadastroEstabelecimento;
