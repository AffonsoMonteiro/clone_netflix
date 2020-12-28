import React from 'react';
import './FeatureMovie.css'


function FeatureMovie( {item} ) {

    let firstDate = new Date(item.first_air_date)

    let genres = []
    for (let i in item.genres) {
        genres.push( item.genres[i].name)
    }

    let description = item.overview
    if(description.length > 270) {
        description = description.substring(0, 270) + '...'
    }

    return (
        <div>
            <section className="featured" style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
            }}>
                <div className="feature--vertical">
                    <div className="feature--horizontal">
                        <div className="feature--name"> {item.original_name}</div>
                        <div className="feature--info">
                            <div className="feature--points"> {item.vote_average} pontos</div>
                            <div className="feature--year"> {firstDate.getFullYear()} </div>
                            <div className="feature--seasons"> {item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''} </div>
                        </div>
                        <div className="featured--description"> {description} </div>
                        <div className="featured--buttons">
                            <a className="featured--watchButton" href={`/watch/${item.id}`}>► Assistir</a>
                            <a className="featured--myListButton" href={`/list/add/${item.id}`}>+ Minha Lista</a>
                        </div>
                        <div className="featured--genres"> <strong>Gêneros:</strong> {genres.join(', ')} </div>
                    </div>
                     
                 </div>
            </section>
        </div>
    )
}

export default FeatureMovie