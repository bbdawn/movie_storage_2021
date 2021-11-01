import React from 'react';
import './details.css'

class Detail extends React.Component {

    state={
        isLoading: true,
    };
    
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const {location} = this.props;
        if(location.state) {
            return (
                <div className="wapper">
                    <img className="movie_bgimage" src={location.state.bgimage} alt={location.state.title} title={location.state.title} />
                        <div className="things">
                            <img className="movie_poster" src = {location.state.poster} alt={location.state.title} title={location.state.title} />
                            <div className="i_wrapper">
                                <div className="movie_title">{location.state.title}</div>
                                <div className="line_wrapper"><div className="line"></div></div>
                                <div className="info">
                                    <div className="movie_rating">★ {location.state.rating}</div>
                                    <div className="movie_year">{location.state.year} </div>
                                    <div className="movie_runtime">{location.state.runtime}min</div>
                                </div>
                                <div className="movie_genres">
                                {location.state.genres.map((genre, index) => {
                                    return <div key={index} className="movie_genre">{genre}</div>;
                                })}</div>
                                <div className="summary_title">SUMMARY</div>
                                <div className="summary">{location.state.description}</div>
                            </div>
                    </div>
                </div>
            );
        } else {
           return null;
        }
    }
}

export default Detail;