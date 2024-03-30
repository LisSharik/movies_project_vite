import { useEffect, useState } from "react";
import { get } from "../data/httpClient"
import	{ useParams } from "react-router-dom"
import { getMovieImg } from "../utils/getMovieImg";
import "./MovieDetails.css"


export function MovieDetails(){
    const { movieId } = useParams();
    const [movie, setMovie] = useState([]);
    const [genres, setGenders] = useState([]);
    const [video, setVideos] = useState([]);
    
    let listgenres = "";
   

    // let gendersList = getGenders().then(genders =>{
    //     console.log("->",genders);
    // });

    useEffect(() => {
        get("/movie/" + movieId).then((data) => {
          setMovie(data);
      
          setGenders(data.genres)   
          console.log(data);
        });

        get(`/movie/${movieId}/videos`).then((data)=>{
          setVideos(data.results.at(-1));
         console.log(data.results);
        
          
          
        })

      }, [movieId]);
 
    const imageUrl = getMovieImg(movie.poster_path, 400);
    const bakcgroundImgUrl = getMovieImg(movie.backdrop_path,780)
    const lastGenreIndex = genres.length - 1;
    // const lastVideoIndex = video[video.length - 1];
  
    genres.forEach((gender, index) =>{   
        if (index == lastGenreIndex){
            listgenres += gender.name

        }else{
          listgenres += gender.name + " - "
        }

      })

    
    
    
 
    return(
       <div className="detailsContainer">
            <div className="movieDetails">
              <div className="movieImge">
                <img className="movieImg" src={imageUrl} alt={movie.title}/>
              </div>
              <div className="movieInfo">
                <h1>{movie.title}</h1>
                <div className="details">
                  <strong>🏆 {movie.vote_average} / 100</strong>
                  <strong>{movie.release_date}</strong>
                  <strong>{listgenres}</strong>
                  
                  </div>
                  
                  <p className="desciption"><strong>Description: </strong>
                    <br />
                    {movie.overview}
                  </p>
                
                  <iframe src={`https://www.youtube.com/embed/${video.key}?si=untqUs7K0aett_Hy`}  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                
                  
              </div>
            </div>
            
            <img className="backgorundImg" src={bakcgroundImgUrl}  />
       </div>
    )
}


// <div className="detailsContainer">
            
//             <div className="movieDetails">
//               <img className="movieImg" src={imageUrl} alt={movie.title}/>
//                   <div className="movieName">
//                       <h1>{movie.title}</h1>
//                       <strong>Genres: </strong><span>{listgenres}</span>
//                       <p className="description">
//                         <strong>Description: </strong>
//                       {movie.overview}
//                       </p>
                  
                      
//                   </div>
                  
//             </div>
//             <img className="backgorund" src={bakcgroundImgUrl}  />
//        </div>