import styled from "styled-components/native";

import { tema } from "../themes/tema";

export const InputContainer = styled.View`
	position: relative;
	padding: 20px;
	align-items: center;
`;

export const InputBox = styled.TextInput`
	width: 70%;
	height: 70px;
	background-color: ${tema.cores.temaNeutro.branco};
	border: none;
	outline: none;
	border-radius: 50px;
	border: 1.5px ${tema.cores.temaVerde.verdePrincipal} solid;
	padding: 0 10px 0 20px;
`;

export const Label = styled.Text`
	position: absolute;
	padding: 0 4px 0 2px;
	font-size: 18px;
	font-family: "Poppins-Regular";
	color: ${tema.cores.temaVerde.verdePrincipal};
	background-color: ${tema.cores.temaNeutro.branco};
	left: 28%;
	top: 10%;
`;
