import { TextProps as TextPropsNative } from "react-native";
import { ContainerText } from "./text.style";
import { textTypes } from "./textTypes";
import { useMemo } from "react";

interface TextProps extends TextPropsNative {
    color?: string;
    type?: string;
};

const Text = ({ color, type, ...props }: TextProps) => {
    const fontSize = useMemo(() => {
        switch (type) {
            case textTypes.TITLE_BOLD:
            case textTypes.TITLE_LIGHT:
            case textTypes.TITLE_REGULAR:
                return '30px';
            
            case textTypes.SUB_TITLE_BOLD:
            case textTypes.SUB_TITLE_LIGHT:
            case textTypes.SUB_TITLE_REGULAR:
                return '26px';

            case textTypes.PARAGRAFO_SMALL_BOLD:
            case textTypes.PARAGRAFO_SMALL_LIGTH:
            case textTypes.PARAGRAFO_SMALL_REGULAR:
                return '12px';

            case textTypes.BUTTON_BOLD:
            case textTypes.BUTTON_LIGHT:
            case textTypes.BUTTON_REGULAR:
                return '17px';
            
            case textTypes.PARAGRAFO_BOLD:
            case textTypes.PARAGRAFO_LIGTH:
            case textTypes.PARAGRAFO_REGULAR:
            default: 
                return '14px';
        };
    }, [type]);

    const fontFamily = useMemo(() => {
        switch (type) {
            case textTypes.TITLE_BOLD:
            case textTypes.SUB_TITLE_BOLD:
            case textTypes.PARAGRAFO_SMALL_BOLD:
            case textTypes.PARAGRAFO_BOLD:
            case textTypes.BUTTON_BOLD:
                return 'Poppins-Bold';

            case textTypes.TITLE_LIGHT:
            case textTypes.SUB_TITLE_LIGHT:
            case textTypes.PARAGRAFO_SMALL_LIGTH:
            case textTypes.PARAGRAFO_LIGTH:
            case textTypes.BUTTON_LIGHT:
                return 'Poppins_Light';    

            default:
                return 'Poppins_Regular';
        }
    }, [type]);
    
    return (
        <ContainerText fontFamily={fontFamily} fontSize={fontSize} color={color} {...props} />
    );
};

export default Text;