import { View } from "react-native";
import Button from "../../../shared/components/button/Button";
import Input from "../../../shared/components/input/Input";

import { ContainerLogin } from "../styles/login.style";
import Text from "../../../shared/components/text/Text";
import { theme } from "../../../shared/themes/Theme";
import { textTypes } from "../../../shared/components/text/textTypes";

const Login = () => {
    return (
        <View>
            <ContainerLogin>
                <Text type={textTypes.TITLE} color={theme.colors.neutralTheme.white}>Login</Text>
                <Input />
                <Button margin="20px" title="Entrar"/>
            </ContainerLogin>
        </View>
    );
};

export default Login;