import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies:[],
  };

  getMovies = async () => {
    const {
      data: {
        data: {movies},
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=download_count&sort_by=rating&minimum_rating=8.6&limit=50');
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


export default Home;