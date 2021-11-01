import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';


class action extends React.Component {
  state = {
    isLoading: true,
    movies:[],
  };

  getMovies = async () => {
    const {
      data: {
        data: {movies},
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=ACTION&genre=THRILLER&genre=CRIME&sort_by=year&order_by=desc&minimum_rating=7.6&sort_by=download_count&order_by=desc&limit=50');
    this.setState({movies, isLoading: false});
  }
  componentDidMount() {
    this.getMovies() //영화데이터로딩
  }
  render() {
    const {isLoading, movies} = this.state;
    return (
      <section className="loader">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key = {movie.id}
                id = {movie.id}
                year = {movie.year}
                title = {movie.title}
                summary = {movie.summary}
                poster = {movie.medium_cover_image}
                genres = {movie.genres}
                bgimage = {movie.background_image_original}
                runtime = {movie.runtime}
                rating = {movie.rating}
                description = {movie.description_full}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}


export default action;