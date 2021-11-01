import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css'
import { Link } from 'react-router-dom';

function Movie({title,year, description, poster, genres, bgimage, runtime, rating}) {
    return (
        <div className="movie">
            <Link
                to={{
                    pathname: '/movie-detail',
                    state: {year, title, description, poster, genres, bgimage, runtime, rating},
                }}
            >
                <div className="movie_data">
                <img clssName="movie_poster" width = "240px"src={poster} alt={title} title={title} />
                    <div className="movie_title">{title}</div>
                </div>
            </Link>
        </div>
    );
}

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    descroption: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    bgimage: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;