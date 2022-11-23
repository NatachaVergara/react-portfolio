import Cookies from "js-cookie";
import { useState } from "react";

const useJsCookies = (key, defaultValue, time) => {
    const [storeValue, setStoreValue] = useState(() => {
        
        try {
            const value = Cookies.get(key);
            return value ? JSON.parse(value) : Cookies.set(key, JSON.stringify(defaultValue), {expires:time});
        } catch (error) {
            return defaultValue;
        }
    });//Aca termina el useState();

    const setValue = newValue => {
        try {
            Cookies.set(key, JSON.stringify(newValue), {expires:time});
        } catch (error) {
            console.log(error)
        }

        setStoreValue(newValue);
    }

    return [storeValue, setValue];

}

export default useJsCookies