import axios from "axios";

const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWYyMGM3ZDVhMzA0NmExYWY1ZGE2Y2MxYzgwZDIzMCIsInN1YiI6IjY1YmYxMWFiYTdlMzYzMDFiNzU1OWYzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qnPVZ3E8x4LT0U7eYATrv7Ki9qVk2DNogJzOReqTZjU';

export const getMovieRanking = (params, setMovieRanking, setError) => {
    
    const { year, genreId } = params;

    const requestParams = {
        api_key: apiKey,
        language: 'en-US',
        sort_by: 'popularity.desc',
        include_adult: true,
        include_video: false,
        page: 1,
        region: 'US',
    };

    // 선택된 연도가 있으면 추가
    if (year) {
        requestParams.primary_release_year = year;
    }

    // 선택된 장르가 있으면 추가
    if (genreId) {
        requestParams.with_genres = genreId;
    }
    axios.get('https://api.themoviedb.org/3/discover/movie', {
    params: requestParams,
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWYyMGM3ZDVhMzA0NmExYWY1ZGE2Y2MxYzgwZDIzMCIsInN1YiI6IjY1YmYxMWFiYTdlMzYzMDFiNzU1OWYzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qnPVZ3E8x4LT0U7eYATrv7Ki9qVk2DNogJzOReqTZjU', //         
        }
    })
    .then((response) => {
        
        setMovieRanking(response.data.results);
        setError(null);
    })
    .catch((error) => {
        console.error(error);
        setMovieRanking([]);
        setError('Oops! Can`t find movie Info');
    });
    
};

export const getGenres = (setGenres, setError) => {
    
    axios.get('https://api.themoviedb.org/3/genre/movie/list', {
        params: {
            api_key: apiKey,
            language: 'en-US',
        },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWYyMGM3ZDVhMzA0NmExYWY1ZGE2Y2MxYzgwZDIzMCIsInN1YiI6IjY1YmYxMWFiYTdlMzYzMDFiNzU1OWYzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qnPVZ3E8x4LT0U7eYATrv7Ki9qVk2DNogJzOReqTZjU', //         
        }
    })
    .then((response) => {
        setGenres(response.data.genres);
        setError(null);
    })
    .catch((error) => {
        console.error(error);
        setGenres([]);
        setError('Oops! Can`t find Genres');
    });
};
