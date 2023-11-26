import { TextInputProps } from "react-native";

import { tema } from "../themes/tema";
import { InputBox, InputContainer, Label } from "./input.style";

interface InputProps extends TextInputProps {
	label: string;
	placeholder: string;
}

const Input = ({ label, placeholder, ...props }: InputProps) => {
	return (
		<InputContainer>
			<InputBox
				placeholder={placeholder}
				placeholderTextColor={tema.cores.temaVerde.verdePrincipal}
				{...props}
			></InputBox>
			<Label>{label}</Label>
		</InputContainer>
	);
};

export default Input;
