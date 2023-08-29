import { Text, View } from "react-native";
import Button from "../../../shared/components/button/Button";
import Input from "../../../shared/components/input/Input";

import { ContainerLogin } from "../styles/login.style";

const Login = () => {
    return (
        <View>
            <ContainerLogin>
                <Text>Login Teste</Text>
                <Input />
                <Button margin="20px" title="Entrar"/>
            </ContainerLogin>
        </View>
    );
};

export default Login;