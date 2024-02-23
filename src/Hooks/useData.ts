import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

// Custom hook for fetching data from an API endpoint
const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState<string>("");
    const [isLoading, setLoading] = useState<boolean | undefined>(false);

    useEffect(() => {
        let controller: AbortController | undefined;

        const fetchData = async () => {
            setLoading(true);

            // Explicitly check for the existence of window and AbortController
            if (typeof window !== "undefined" && "AbortController" in window) {
                controller = new window.AbortController();
            } else {
                // Fallback if window or AbortController is not available
                controller = new AbortController();
            }

            try {
                const response = await apiClient.get<FetchResponse<T>>(endpoint, {
                    signal: controller.signal,
                });
                setData(response.data.results);
                setLoading(false);
            } catch (err) {
                if (err instanceof CanceledError) {
                    return;
                }
                setError((err as Error).message);
                setLoading(false);
            } finally {
                // Ensure the controller is re-initialized for future fetch statements
                if (controller) {
                    controller = undefined;
                    controller =
                        typeof window !== "undefined" && "AbortController" in window
                            ? new window.AbortController()
                            : new AbortController();
                }
            }
        };

        fetchData();

        // Cleanup function
        return () => {
            if (controller) {
                controller.abort();
            }
        };
    }, [endpoint]);

    return { data, error, isLoading };
};

export default useData;
