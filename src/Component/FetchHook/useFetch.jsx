import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const abortController = new AbortController();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const res = await fetch(url, { signal: abortController.signal });
                if (!res.ok) {
                    throw new Error("Can't fetch data from the URL");
                }
                const jsonData = await res.json();
                setData(jsonData);
            } catch (err) {
                if (err.name === "AbortError") {
                    console.log("Fetch aborted");
                } else {
                    setError(err.message);
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();

        // Cleanup function to abort fetch on component unmount
        return () => {
            abortController.abort();
        };
    }, [url]);

    return { data, isLoading, error };
};

export default useFetch;
