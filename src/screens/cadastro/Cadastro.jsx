import { Button, Container, Text, textTypes, TipoPerfil } from "../../components";
const Cadastro = ({ navigation }) => {
	return (
		<Container>
			<Text margin="0 auto 80px auto" type={textTypes.TITLE_REGULAR}>
				Qual seu tipo de perfil?
			</Text>
			<TipoPerfil
				onPress={() => navigation.navigate("CadastroCliente")}
				title="Cliente"
				icon="user-circle"
				size={50}
			></TipoPerfil>
			<TipoPerfil
				onPress={() => console.log("Proprietário")}
				title="Proprietário"
				icon="store-alt"
				size={50}
			></TipoPerfil>
			<TipoPerfil
				onPress={() => console.log("Freelancer")}
				title="Freelancer"
				icon="user-alt"
				size={50}
			></TipoPerfil>
			<Button margin="50px auto" title="Continuar" />
		</Container>
	);
};

export default Cadastro;
