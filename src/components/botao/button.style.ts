import styled from "styled-components/native";

import { tema } from "../themes/tema";

interface ButtonContainerProps {
	margin?: string;
}

export const ButtonPrimary = styled.TouchableOpacity<ButtonContainerProps>`
	width: 43%;
	height: 40px;
	border-radius: 4px;
	flex-direction: row;
	background-color: ${tema.cores.temaVerde.verdePrincipal};
	align-items: center;
	justify-content: center;
	${(props: { margin: any }) => (props.margin ? `margin: ${props.margin};` : "")}
`;

export const ButtonSecondary = styled(ButtonPrimary)<ButtonContainerProps>`
	${(props: { margin: any }) => (props.margin ? `margin: ${props.margin};` : "")}
	background-color: ${tema.cores.temaVermelho.vermelho};
`;

export const ButtonTerciary = styled(ButtonPrimary)<ButtonContainerProps>`
	${(props: { margin: any }) => (props.margin ? `margin: ${props.margin};` : "")}
	background-color: ${tema.cores.temaVerde.verdeClaro2};
`;

export const ButtonDisabled = styled(ButtonPrimary)<ButtonContainerProps>`
	${(props: { margin: any }) => (props.margin ? `margin: ${props.margin};` : "")}
	background-color: ${tema.cores.temaNeutro.cinza};
`;

export const ActivityButton = styled.ActivityIndicator`
	margin-left: 16px;
`;
