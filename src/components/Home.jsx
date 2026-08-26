import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import MovieCard from "./MovieCard";
import { getPopularMovies, searchMovies } from "../api";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        setError("No movies available...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies...");
    } finally {
      setLoading(false);
    }
    setSearchQuery("");
  };

  return (
    <div className="flex-center flex-col mt-10">
      <form onSubmit={handleSearch} className="flex-center gap-5 text-[18px]">
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          value={searchQuery}
          placeholder="Search for Movies..."
          className="px-5 py-2 rounded-full bg-gray-300 w-100 outline-none focus-within:ring-2 focus-within:ring-dark"
        />
        <button
          type="submit"
          className="cursor-pointer flex-center gap-1 p-2 rounded-md bg-main hover:bg-hover transition duration-300"
        >
          <FaSearch /> Search
        </button>
      </form>
      {error && <div>{error}</div>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex-center flex-wrap gap-y-5 gap-x-5 w-[90%] min-w-150 h-auto mt-10 p-10">
          {movies.map(
            (movie) =>
              movie.title
                .toLowerCase()
                .startsWith(searchQuery.toLowerCase()) && (
                <MovieCard key={movie.id} movie={movie} />
              ),
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
