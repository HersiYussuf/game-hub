import useData from "./useData"

export interface Genre {
    id: number;
    name: string;
    // Add other properties based on your API response
}

const useGenres = () => useData<Genre>("/genres");

export default useGenres;