//import movie from "./movie.json";
import styles from "./MovieDetail.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Spinner } from "../components/Spinner";


export function MovieDetails() {
  const { movieId } = useParams();
  const [isloading, setIsLoading]  = useState(true);
  const [movie, setMovie] = useState(null);
  console.log(movieId);
 

  useEffect(() => {
    setIsLoading(true);
    get("/movie/" + movieId).then((data) => {
      setIsLoading(false)
      setMovie(data);
    });
  }, [movieId]);
  if(isloading){
    return <Spinner/>
  }
  if (!movie) {
    return null;
  }

  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title: {movie.title}</strong>
        </p>
        <p>
          <strong>Genero: </strong>
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Descriptions:</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}
