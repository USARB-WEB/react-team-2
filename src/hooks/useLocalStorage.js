import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue){

    const setInitialValue = () => {
        try{
            return JSON.parse(localStorage.getItem(key))
        } catch(e){
            return initialValue;
        }
    }

    const [storedValue, setStoredValue] = useState(setInitialValue);
    
    const setValue = (value) => {
        try{
            localStorage.setItem(key, JSON.stringify(value))
        } catch(e){
            console.log(e);
        }
    }
    
    return [storedValue, setValue];
    
}