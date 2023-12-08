import { FontAwesome } from "@expo/vector-icons";

import { ContainerPerfilHeader, tema, Text, textTypes } from "..";

const PerfilHeader = ({ title, icon, size }: any) => {
	return (
		<ContainerPerfilHeader>
			<Text type={textTypes.TITLE_REGULAR}>{title}</Text>
			<FontAwesome name={icon} size={size} color={`${tema.cores.temaVerde.verdePrincipal}`} />
		</ContainerPerfilHeader>
	);
};

export default PerfilHeader;
