import styled from "styled-components/native";

import { tema } from "../themes/tema";

interface CardContainerProps {
	top: string;
	left: string;
	right: string;
	bottom: string;
	backgroundColor?: string;
	border?: string;
	width?: string;
	height?: string;
	gap?: string;
}

export const CardContainer = styled.TouchableOpacity<CardContainerProps>`
	position: absolute;
	align-items: center;
	flex-direction: column;
	${(props: { top: any }) => `top: ${props.top};`}
	${(props: { left: any }) => `left: ${props.left};`}
	${(props: { right: any }) => `right: ${props.right};`}
	${(props: { bottom: any }) => `bottom: ${props.bottom};`}
	${(props: { backgroundColor: any }) =>
		props.backgroundColor
			? `background-color: ${props.backgroundColor}`
			: `background-color: ${tema.cores.temaNeutro.cinza}`};
	${(props: { border: any }) => (props.border ? `border: ${props.border}` : "border-radius: 5px")};
	${(props: { width: any }) => (props.width ? `width: ${props.width}` : "width: 30%")};
	${(props: { height: any }) => (props.height ? `height: ${props.height}` : "height: 150px")};
	${(props: { gap: any }) => (props.gap ? `gap: ${props.gap}` : "gap: 5px")};
`;
