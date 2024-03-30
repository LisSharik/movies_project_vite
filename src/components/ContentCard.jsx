import { useEffect, useState } from "react";
import { get } from "../data/httpClient";
import { MovieCard } from "./MovieCard";
import "./ContentCard.css"

export function ContentCard() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        get("/discover/movie").then((data) => {
            setMovies(data.results);
           
            console.log("->",data.results);
            
           
        });
    }, []);

    // movies.map(movie =>{
    //     console.log(movie.genre_ids);
    // })
    return (
        <ul className="container">
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
                
            ))}
        </ul>
    );
}