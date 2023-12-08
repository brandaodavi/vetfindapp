import styled from "styled-components/native";

import { tema } from "../themes/tema";

interface ContainerTextProps {
	margin?: string;
	color?: string;
	fontSize: string;
	fontFamily:
		| "Poppins-Black"
		| "Poppins-Bold"
		| "Poppins-Italic"
		| "Poppins-Light"
		| "Poppins-Medium"
		| "Poppins-Regular"
		| "Poppins-SemiBold"
		| "Poppins-Thin";
}

export const ContainerText = styled.Text<ContainerTextProps>`
	${(props: { color: any }) =>
		props.color ? `color: ${props.color}` : `color: ${tema.cores.temaVerde.verdePrincipal}`};
	font-size: ${(props: { fontSize: any }) => props.fontSize};
	font-family: ${(props: { fontFamily: any }) => props.fontFamily};
	${(props: { margin: any }) => (props.margin ? `margin: ${props.margin}` : "")};
`;
