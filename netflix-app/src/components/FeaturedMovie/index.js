import React from 'react';
import './FeaturedMovie.css';

const FeaturedMovie = ({item}) => {

    let firstDate = new Date(item.first_air_date);

    let genres = [];
    for(let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    let description = item.overview;
    if(description.length > 300) {
        description = description.substring(0, 200) + '...'
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} rate</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured--description">{description}</div>
                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className="featured--watchbutton">&#9658; Watch</a>
                        <a href={`/list/add/${item.id}`} className="featured--mylistbutton">+ My List</a>
                    </div>
                    <div className="featured--genres"><strong>Genres:</strong> {genres.join(', ')}</div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedMovie;
