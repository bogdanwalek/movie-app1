const MovieList = (props) => {
    return(
        <>
            {props.movies.map( (movie) => (
                <div className="image-container">
                    <div className="poster-frame">
                        <img src={movie.Poster} alt="movie" />
                        <div className="heading d-flex justify-content-center align-items-center">
                            
                        </div>
                        <div className="overlay d-flex align-items-center justify-content-center">
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
export default MovieList;