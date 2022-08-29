import {useEffect, useState} from "react";

export const useFetch = (request, ...dependencies) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setIsLoading(true);
        request()
            .then(response => setData(response.data))
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    }, [...dependencies])

    return [data, isLoading, error];
}