import SearchForm from "../components/SearchForm";
import MovieList from "../components/MovieList";
import axios from "axios";
import { apikey } from "../constants";
import { useLoaderData } from "react-router-dom";

export async function loader({ request }) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search") || "one piece";
  try {
    const movieSearchEndPoint = `https://www.omdbapi.com/?apikey=${apikey}&s=${searchTerm}`;
    const response = await axios.get(movieSearchEndPoint);
    return {
      movieApiResponse: response.data,
      searchTerm,
      isError: false,
      error: "",
    };
  } catch (error) {
    const errorMessage =
      error?.response?.data?.Error ||
      error.message ||
      "something went wrong...";
    return {
      movieApiResponse: null,
      searchTerm,
      isError: true,
      error: errorMessage,
    };
  }
}

// axios ke case mai humhe khud se handle nahi kerna pata hain error ko jese hii error  aayega humhara direct catch per pass chala jayega ek error msg ke saath
function Home() {
  const data = useLoaderData();

  return (
    <div>
      <SearchForm searchTerm={data.searchTerm} />
      <MovieList data={data} />
    </div>
  );
}

export default Home;

// Most useful case of using loader is to reading the search parameter form the Url.
// axios ke case mai mere ko direct data mil raha hain verna fetch wale case mai humhe phele promise mai milta tha phir hum json mai kerna padhta tha
