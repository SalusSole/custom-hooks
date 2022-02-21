import { useEffect, useRef, useState } from "react";

const useFetch = (url) => {
    const isMounted = useRef(true);
    const [state, setState] = useState({
        results: [],
        isLoading: true,
        error: null,
    });

    if (url === undefined) {
        setState({
            ...state,
            error: "The URL is required",
        });
        throw new Error("The URL is required");
    }

    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

    useEffect(() => {
        setState({
            results: [],
            isLoading: true,
            error: null,
        });
        fetch(url)
            .then((response) => response.json())
            .then((response) => {
                const { results } = response;
                if (isMounted.current === true) {
                    setState({
                        error:
                            response.error === undefined
                                ? null
                                : response.error,
                        isLoading: false,
                        results: response.error === undefined ? results : [],
                    });
                }
            })
            .catch((error) => {
                setState({
                    error: error,
                    isLoading: false,
                    results: [],
                });
            });
    }, [url]);

    return results;
};

export default useFetch;
