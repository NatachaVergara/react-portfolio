import Cookies from "js-cookie";
import { useState } from "react";

const useJsCookies = (key, defaultValue) => {
    const [storeValue, setStoreValue] = useState(() => {
        
        try {
            const value = Cookies.get(key);
            return value ? JSON.parse(value) : Cookies.set(key, JSON.stringify(defaultValue));
        } catch (error) {
            return defaultValue;
        }
    });//Aca termina el useState();

    const setValue = newValue => {
        try {
            Cookies.set(key, JSON.stringify(newValue));
        } catch (error) {
            console.log(error)
        }

        setStoreValue(newValue);
    }

    return [storeValue, setValue];

}

export default useJsCookies