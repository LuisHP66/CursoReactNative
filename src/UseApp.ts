import { useState } from "react";

export const UseApp = () => {
    const [value, setValue] = useState('Antes');

    const handleOnPress = () => {
        setValue("Depois");
    };

    return {
        value,
        handleOnPress
    };
};