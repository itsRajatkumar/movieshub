import React, {useState, useEffect} from 'react'
import SearchBox from './SearchBox'
import { useParams } from "react-router-dom";

const MovieDetailPage = () => {
    const params = useParams();
    const [data, setData] = useState({});
    // const [movies, setMovies] = useState();

    console.log(params)
	const getMovieDetailsRequest = async () => {
        console.log(params)
		const url = `http://www.omdbapi.com/?i=${params.id}&plot=full&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();
        console.log(responseJson)
		setData(responseJson);
        console.log(responseJson)
	};
    useEffect(() => {
      getMovieDetailsRequest();
      
    }, [])
    


    // console.log(params)


    
    return (
        <>
        <SearchBox/>
        <div className='container color-white-text'>
            <div className="row">
                <div className="col row-flex">
                    <img src={data?.Poster} class="img-fluid mt-4" alt="..."></img>
                    <div class="badge bg-primary text-wrap">
                        {data?.Genre}
                    </div>
                </div>
                <div className="col-lg mt-4">
                    <p class="h1">{data?.Title}</p>
                    <p class="font-monospace">{data?.Released} | {`${parseInt(parseInt(data?.Runtime)/60)}:${parseInt((parseInt(data?.Runtime)%60))} Min`} | {data?.Language}</p>
                    <p class="lead">
                        {data?.Plot}
                    </p>
                    <h5>
                        Cast:- 
                        <small class="text-muted">{` ${data?.Actors}`}</small>
                    </h5>
                    <h5>
                        Director:- 
                        <small class="text-muted">{` ${data?.Director}`}</small>
                    </h5>
                    <h5>
                        Writer:- 
                        <small class="text-muted">{` ${data?.Writer}`}</small>
                    </h5>
                </div>
            </div>
        </div>
        </>
    )
}

export default MovieDetailPage