import { Container, Text, textTypes, TipoPerfil } from "../../components";

const CadastroFreelancer = ({ navigation }) => {
	return (
		<Container>
			<Text margin="100px auto 150px auto" type={textTypes.TITLE_REGULAR}>
				Qual seu tipo de perfil?
			</Text>
			<TipoPerfil
				onPress={() => navigation.navigate("CadastroVeterinario")}
				title="Veterinário"
				icon="user-md"
				size={50}
			></TipoPerfil>
			<TipoPerfil
				onPress={() => navigation.navigate("CadastroCuidador")}
				title="Cuidador"
				icon="house-user"
				size={50}
			></TipoPerfil>
		</Container>
	);
};

export default CadastroFreelancer;
