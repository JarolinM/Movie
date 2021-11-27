import { MovieCard } from "./MovieCard";
//import movies from "./movies.json";

import styles from "./MovieGrid.module.css"
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Spinner } from "./Spinner";

import { useQuery } from "../hooks/useQuery";


export function MoviesGrid() {
   // let movies=[];
  const [movies, setMovies] = useState([]);
  const [isloading, setIsLoading] = useState(true);
 
  const query = useQuery();
  const search = query.get("search");
  console.log(search) 

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search
      : "/discover/movie";
    get(searchUrl).then((data) => {
      setMovies(data.results);
      setIsLoading(false);
    });
  }, [search]);
  
 if(isloading){
     return <Spinner/>
 }
  return(
      <ul className={styles.movieGrid}>
          {movies.map((movie)=>(
              <MovieCard key={movie.id} movie={movie} />
          ))}
      </ul>
  )
}
