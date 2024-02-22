import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
interface Genres {
    id: number;
    name: string;
}

interface FetchGenresResponse {
    count: number;
    results: Genres[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genres[]>([]);
    const [error, setError] = useState<string>("");
    const [isLoading, setLoading] = useState<boolean | undefined>();

    useEffect(() => {
        let controller: AbortController | undefined;
        setLoading(true);

        const fetchData = async () => {
            // Explicitly check for the existence of window and AbortController
            if (typeof window !== "undefined" && "AbortController" in window) {
                controller = new window.AbortController();
            } else {
                // Fallback if window or AbortController is not available
                controller = new AbortController();
            }

            try {
                const response = await apiClient.get<FetchGenresResponse>("/genres", {
                    signal: controller.signal,
                });
                setGenres(response.data.results);
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
    }, []); // Include dependencies array if needed

    return { genres, error, isLoading };
};

export default useGenres;
