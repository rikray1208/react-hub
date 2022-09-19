import {ChangeEvent, useState} from "react";
import useValidation from "./useValidation";
import useDebounce from "./useDebounce";

interface validations {
    minLength?: number,
    isEmpty?: boolean,
    isEmail?: boolean,
    isLatin?: boolean,
    containNumber?: boolean
}

function useInput(initialValue: string, validations?: validations) {
    const [value, setValue] = useState<string>(initialValue);
    const [isDirty, setIsDirty] = useState<boolean>(false);
    const debounceValue = useDebounce(value, 300)
    const validation = useValidation(debounceValue, validations);
    const arrErrors: string[] = [];

    for (let error of Object.values(validation)) {
        if(typeof error !== "boolean")
        arrErrors.push(error)
    }

    function onChange(event: ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value)
    }

    function onBlur() {
        setIsDirty(true)
    }

    return {
        value,
        isDirty,
        onChange,
        onBlur,
        ...validation,
        arrErrors

    }
}

export default useInput;