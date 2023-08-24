import {Button, SafeAreaView, Text} from "react-native";
import { UseApp } from "./UseApp";

const App = () => {
    const {handleOnPress, value} = UseApp();

    return (
        <SafeAreaView>
            <Text>
                {value}
            </Text>
            <Button title="BOTAO" onPress={handleOnPress} />
        </SafeAreaView>
    );
};

export default App;