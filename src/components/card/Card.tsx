import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

import { Text } from "../";
import { CardContainer } from "./cardStyle";

interface CardProps extends TouchableOpacityProps {
	title: string;
	icon: string;
	iconColor: string;
	iconSize: number;
	top: string;
	left: string;
	right: string;
	bottom: string;
	backgroundColor: string;
	border: string;
	width: string;
	height: string;
	gap: string;
	onPress?: () => void;
}

const Card = ({
	title,
	icon,
	iconColor,
	iconSize,
	onPress,
	top,
	left,
	right,
	bottom,
	backgroundColor,
	border,
	width,
	height,
	gap,
	...props
}: CardProps) => {
	const acionarCard = () => {
		onPress();
	};
	return (
		<CardContainer
			top={top}
			left={left}
			right={right}
			bottom={bottom}
			backgroundColor={backgroundColor}
			border={border}
			width={width}
			height={height}
			gap={gap}
			onPress={acionarCard}
			{...props}
		>
			<Text type="SMALL_REGULAR">{title}</Text>
			<FontAwesome5 name={icon} size={iconSize} color={iconColor} />
		</CardContainer>
	);
};

export default Card;
