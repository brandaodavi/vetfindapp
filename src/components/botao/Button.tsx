import { TouchableOpacityProps } from "react-native";

import { Text, textTypes } from "../index";
import { tema } from "../themes/tema";
import {
	ActivityButton,
	ButtonDisabled,
	ButtonPrimary,
	ButtonSecondary,
	ButtonTerciary,
} from "./button.style";

interface ButtonProps extends TouchableOpacityProps {
	title: string;
	margin?: string;
	type?: string;
	disabled?: boolean;
	loading?: boolean;
	onPress?: () => void;
}

const Button = ({ title, margin, type, disabled, loading, onPress, ...props }: ButtonProps) => {
	const acionarBotao = () => {
		if (!loading && !disabled && onPress) {
			onPress();
		}
	};

	const renderizarTexto = (color: string) => (
		<>
			<Text type={textTypes.SUBTITLE_REGULAR} color={color}>
				{title}
			</Text>
			{loading && <ActivityButton color={tema.cores.temaNeutro.branco} />}
		</>
	);

	if (disabled) {
		return (
			<ButtonDisabled {...props} margin={margin}>
				{renderizarTexto(tema.cores.temaNeutro.branco)}
			</ButtonDisabled>
		);
	}

	switch (type) {
		case tema.botoes.temaBotao.terciario:
			return (
				<ButtonTerciary {...props} margin={margin} onPress={acionarBotao}>
					{renderizarTexto(tema.cores.temaNeutro.branco)}
				</ButtonTerciary>
			);
		case tema.botoes.temaBotao.secundario:
			return (
				<ButtonSecondary {...props} margin={margin} onPress={acionarBotao}>
					{renderizarTexto(tema.cores.temaNeutro.branco)}
				</ButtonSecondary>
			);
		case tema.botoes.temaBotao.primario:
		default:
			return (
				<ButtonPrimary {...props} margin={margin} onPress={acionarBotao}>
					{renderizarTexto(tema.cores.temaNeutro.branco)}
				</ButtonPrimary>
			);
	}
};

export default Button;
