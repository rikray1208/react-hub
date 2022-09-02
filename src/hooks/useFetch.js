import {useEffect, useState} from "react";

export const useFetch = (request, ...dependencies) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setIsLoading(true);
        request()
            .then(response => console.log(response))
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false))
    }, [...dependencies])

    return [data, isLoading, error];
}