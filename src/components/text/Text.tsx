import { useMemo } from "react";
import { TextProps as TextPropsNative } from "react-native/types";

import { ContainerText } from "./text.style";
import { textTypes } from "./textType";

interface TextProps extends TextPropsNative {
	color?: string;
	type?: string;
	margin?: string;
}

const Text = ({ margin, color, type, ...props }: TextProps) => {
	const fontSize = useMemo(() => {
		switch (type) {
			case textTypes.TITLE_BLACK:
			case textTypes.TITLE_BOLD:
			case textTypes.TITLE_ITALIC:
			case textTypes.TITLE_LIGHT:
			case textTypes.TITLE_MEDIUM:
			case textTypes.TITLE_REGULAR:
			case textTypes.TITLE_SEMIBOLD:
			case textTypes.TITLE_THIN:
				return "26px";
			case textTypes.SUBTITLE_BLACK:
			case textTypes.SUBTITLE_BOLD:
			case textTypes.SUBTITLE_ITALIC:
			case textTypes.SUBTITLE_LIGHT:
			case textTypes.SUBTITLE_MEDIUM:
			case textTypes.SUBTITLE_REGULAR:
			case textTypes.SUBTITLE_SEMIBOLD:
			case textTypes.SUBTITLE_THIN:
				return "20px";
			case textTypes.PARAGRAPH_BLACK:
			case textTypes.PARAGRAPH_BOLD:
			case textTypes.PARAGRAPH_ITALIC:
			case textTypes.PARAGRAPH_LIGHT:
			case textTypes.PARAGRAPH_MEDIUM:
			case textTypes.PARAGRAPH_REGULAR:
			case textTypes.PARAGRAPH_SEMIBOLD:
			case textTypes.PARAGRAPH_THIN:
				return "16px";
			case textTypes.SMALLER_BLACK:
			case textTypes.SMALLER_BOLD:
			case textTypes.SMALLER_ITALIC:
			case textTypes.SMALLER_LIGHT:
			case textTypes.SMALLER_MEDIUM:
			case textTypes.SMALLER_REGULAR:
			case textTypes.SMALLER_SEMIBOLD:
			case textTypes.SMALLER_THIN:
				return "12px";
			case textTypes.LABEL_BLACK:
			case textTypes.LABEL_BOLD:
			case textTypes.LABEL_ITALIC:
			case textTypes.LABEL_LIGHT:
			case textTypes.LABEL_MEDIUM:
			case textTypes.LABEL_REGULAR:
			case textTypes.LABEL_SEMIBOLD:
			case textTypes.LABEL_THIN:
				return "18px";
			case textTypes.SMALL_BLACK:
			case textTypes.SMALL_BOLD:
			case textTypes.SMALL_ITALIC:
			case textTypes.SMALL_LIGHT:
			case textTypes.SMALL_MEDIUM:
			case textTypes.SMALL_REGULAR:
			case textTypes.SMALL_SEMIBOLD:
			case textTypes.SMALL_THIN:
			case textTypes.PLACEHOLDER_BLACK:
			case textTypes.PLACEHOLDER_BOLD:
			case textTypes.PLACEHOLDER_ITALIC:
			case textTypes.PLACEHOLDER_LIGHT:
			case textTypes.PLACEHOLDER_MEDIUM:
			case textTypes.PLACEHOLDER_REGULAR:
			case textTypes.PLACEHOLDER_SEMIBOLD:
			case textTypes.PLACEHOLDER_THIN:
			default:
				return "14px";
		}
	}, [type]);

	const fontFamily = useMemo(() => {
		switch (type) {
			case textTypes.TITLE_BLACK:
			case textTypes.SUBTITLE_BLACK:
			case textTypes.PARAGRAPH_BLACK:
			case textTypes.SMALL_BLACK:
			case textTypes.SMALLER_BLACK:
			case textTypes.PLACEHOLDER_BLACK:
			case textTypes.LABEL_BLACK:
				return "Poppins-Black";
			case textTypes.TITLE_BOLD:
			case textTypes.SUBTITLE_BOLD:
			case textTypes.PARAGRAPH_BOLD:
			case textTypes.SMALL_BOLD:
			case textTypes.SMALLER_BOLD:
			case textTypes.PLACEHOLDER_BOLD:
			case textTypes.LABEL_BOLD:
				return "Poppins-Bold";
			case textTypes.TITLE_ITALIC:
			case textTypes.SUBTITLE_ITALIC:
			case textTypes.PARAGRAPH_ITALIC:
			case textTypes.SMALL_ITALIC:
			case textTypes.SMALLER_ITALIC:
			case textTypes.PLACEHOLDER_ITALIC:
			case textTypes.LABEL_ITALIC:
				return "Poppins-Italic";
			case textTypes.TITLE_LIGHT:
			case textTypes.SUBTITLE_LIGHT:
			case textTypes.PARAGRAPH_LIGHT:
			case textTypes.SMALL_LIGHT:
			case textTypes.SMALLER_LIGHT:
			case textTypes.PLACEHOLDER_LIGHT:
			case textTypes.LABEL_LIGHT:
				return "Poppins-Light";
			case textTypes.TITLE_MEDIUM:
			case textTypes.SUBTITLE_MEDIUM:
			case textTypes.PARAGRAPH_MEDIUM:
			case textTypes.SMALL_MEDIUM:
			case textTypes.SMALLER_MEDIUM:
			case textTypes.PLACEHOLDER_MEDIUM:
			case textTypes.LABEL_MEDIUM:
				return "Poppins-Medium";
			case textTypes.TITLE_SEMIBOLD:
			case textTypes.SUBTITLE_SEMIBOLD:
			case textTypes.PARAGRAPH_SEMIBOLD:
			case textTypes.SMALL_SEMIBOLD:
			case textTypes.SMALLER_SEMIBOLD:
			case textTypes.PLACEHOLDER_SEMIBOLD:
			case textTypes.LABEL_SEMIBOLD:
				return "Poppins-Semibold";
			case textTypes.TITLE_THIN:
			case textTypes.SUBTITLE_THIN:
			case textTypes.PARAGRAPH_THIN:
			case textTypes.SMALL_THIN:
			case textTypes.SMALLER_THIN:
			case textTypes.PLACEHOLDER_THIN:
			case textTypes.LABEL_THIN:
				return "Poppins-Thin";
			case textTypes.TITLE_REGULAR:
			case textTypes.SUBTITLE_REGULAR:
			case textTypes.PARAGRAPH_REGULAR:
			case textTypes.SMALL_REGULAR:
			case textTypes.SMALLER_REGULAR:
			case textTypes.PLACEHOLDER_REGULAR:
			case textTypes.LABEL_REGULAR:
			default:
				return "Poppins-Regular";
		}
	}, [type]);

	return (
		<ContainerText
			margin={margin}
			fontFamily={fontFamily}
			fontSize={fontSize}
			color={color}
			{...props}
		/>
	);
};

export default Text;
