import { Container, Input, PerfilHeader, Text } from "../../components";

const CadastroEstabelecimento2 = ({ navigation }) => {
	return (
		<Container>
			<PerfilHeader title="Sobre o estabelecimento" icon="store-alt" size={60} />
			<Input label="Logradouro" placeholder="Insira o logradouro"/>
		</Container>
	);
};

export default CadastroEstabelecimento2;
