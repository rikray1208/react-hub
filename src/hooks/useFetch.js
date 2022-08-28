import {useEffect, useState} from "react";

export const useFetch = (request) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setIsLoading(true);
        request()
            .then(response => setData(response.data))
            .catch(e => setError(e.message))
            .finally(() => setIsLoading(false))
    }, [])

    return [data, isLoading, error];
}