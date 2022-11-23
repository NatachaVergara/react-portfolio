import { useState } from "react";

const useLocalstorage = (key, defaultValue) => {
    const [storeValue, setStoreValue] = useState(() => {
        
        try {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : localStorage.setItem(key, JSON.stringify(defaultValue));
        } catch (error) {
            return defaultValue;
        }
    });//Aca termina el useState();

    const setValue = newValue => {
        try {
            localStorage.setItem(key, JSON.stringify(newValue));
        } catch (error) {
            console.log(error)
        }

        setStoreValue(newValue);
    }

    return [storeValue, setValue];

}

export default useLocalstorage