import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Games[];
}

const useGames = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    let controller: AbortController | undefined;

    const fetchData = async () => {
      // Explicitly check for the existence of window and AbortController
      if (typeof window !== "undefined" && "AbortController" in window) {
        controller = new window.AbortController();
      } else {
        // Fallback if window or AbortController is not available
        controller = new AbortController();
      }

      try {
        const response = await apiClient.get<FetchGamesResponse>("/games", {
          signal: controller.signal,
        });
        setGames(response.data.results);
      } catch (err) {
        if (err instanceof CanceledError) {
          return;
        }
        setError((err as Error).message);
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

  return { games, error };
};

export default useGames;
