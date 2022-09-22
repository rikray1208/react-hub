import {useEffect, useState} from "react";

const useValidation = (value: string, validations: any) => {
    const [emptyError, setEmptyError] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [minLengthError, setMinLengthError] = useState<string>('');
    const [latinError, setLatinError] = useState<string>('');
    const [containNumber, setContainNumber] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(false);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'isEmpty':
                    if (!value) {
                        setEmptyError('Поле не может быть пустым')
                    } else {
                         setEmptyError('')
                    }
                    break;
                case 'minLength':
                    if (value.length <= validations[validation]) {
                        setMinLengthError(`Не менее ${validations[validation]} символов`)
                    } else {
                        setMinLengthError('')
                    }
                    break
                case 'isEmail':
                    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

                    if (!regex.test(value)) {
                        setEmailError('Введите свою эл. почту')
                    } else {
                        setEmailError('')
                    }
                    break
                case 'isLatin':
                    let isHave = false;

                    for (let i = 0; i < value.length; i++) {
                        if(value.charCodeAt(i) < 122 && value.charCodeAt(i) > 65) {
                            isHave = true
                        }
                    }
                    if(!isHave) {
                        setLatinError('Используйте буквы латиницы')
                    } else {
                        setLatinError('')
                    }
                    break
                    case 'containNumber':
                        let regexp  = /[0-9]/;

                        if(!regexp.test(value)) {
                            setContainNumber('Содержать цифры')
                        } else {
                            setContainNumber('')
                        }
                    break
            }
        }

    }, [value])

    useEffect(() => {
        if(emptyError || minLengthError || emailError || latinError || containNumber) {
            setIsValid(false)
        } else {
            setIsValid(true)
        }

    }, [emptyError, minLengthError, emailError, latinError, containNumber])

    return {
        emptyError,
        minLengthError,
        emailError,
        latinError,
        containNumber,
        isValid
    }
}

export default  useValidation;