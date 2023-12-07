import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

import { tema, Text, textTypes } from "../index";
import { ContainerTipo } from "./tipoPerfil.style";

interface TipoPerfilProps extends TouchableOpacityProps {
	icon: any;
	size: number;
	title: string;
}

const TipoPerfil = ({ title, icon, size, ...props }: TipoPerfilProps) => {
	return (
		<ContainerTipo {...props}>
			<Text type={textTypes.LABEL_REGULAR}>{title}</Text>
			<FontAwesome5 name={icon} size={size} color={`${tema.cores.temaVerde.verdePrincipal}`} />
		</ContainerTipo>
	);
};

export default TipoPerfil;
