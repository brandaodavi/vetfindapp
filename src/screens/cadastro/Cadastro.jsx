import { Container, Text, textTypes, TipoPerfil } from "../../components";
const Cadastro = ({ navigation }) => {
	return (
		<Container>
			<Text margin="25% auto" type={textTypes.TITLE_REGULAR}>
				Qual seu tipo de perfil?
			</Text>
			<TipoPerfil
				onPress={() => navigation.navigate("CadastroCliente")}
				title="Cliente"
				icon="user-circle"
				size={50}
			></TipoPerfil>
			<TipoPerfil
				onPress={() => navigation.navigate("CadastroProprietario")}
				title="Proprietário"
				icon="store-alt"
				size={50}
			></TipoPerfil>
			<TipoPerfil
				onPress={() => navigation.navigate("CadastroFreelancer")}
				title="Freelancer"
				icon="user-alt"
				size={50}
			></TipoPerfil>
		</Container>
	);
};

export default Cadastro;
