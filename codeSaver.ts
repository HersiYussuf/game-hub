// import { useEffect, useState } from 'react';
// import apiClient from '../Services/api-client';
// import axios, { CanceledError } from 'axios';
// import AbortController from 'abort-controller';

// interface Games {
//     id: number;
//     name: string;
// }

// interface FetchGamesResponse {
//     count: number;
//     results: Games[];
// }

// const useGames = () => {
//     const [games, setGames] = useState<Games[]>([]);
//     const [error, setError] = useState<string>("");

//     useEffect(() => {
//         const controller = new AbortController();
//         const { signal } = controller;
//         apiClient
//             .get<FetchGamesResponse>("/games", { cancelToken: signal })
//             .then((res) => setGames(res.data.results))
//             .catch((err) => {
//                 if (axios.isCancel(err)) {
//                     return;
//                 }
//                 setError(err.message);
//             });

//         return () => controller.abort();
//     }, []);

//     return { games, error };
// };

// export default useGames;