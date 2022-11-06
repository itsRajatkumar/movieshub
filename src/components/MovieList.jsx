import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;
	return (
		<>
			{props.movies?.map((movie, index) => (
				<div className='mybox' key={movie.imdbID} >
				<div className="card" style={{width: "18rem"}}>
				<img src={movie.Poster}  className="card-img-top" alt={movie.Title} />
				<div className="card-body">
				  <h5 className="card-title black">{movie.Title}</h5>
				  <p className="card-text black">{movie.Year}</p>
				  <a href="#" className="btn btn-primary">More Details</a>
				</div>
			  </div>
				{/* <div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'></img>
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<FavouriteComponent />
					</div>
				</div> */}
				</div>
			))}
		</>
	);
};

export default MovieList;