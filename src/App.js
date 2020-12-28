import React, { useEffect, useState } from 'react'
import './App.css'
import Tmdb from './Tmdb'
import MovieRow from './componets/MovieRow'
import FeatureMovie from './componets/FeatureMovie'
import Header from './componets/Header'

function App() {

  const [movieList, setMovieList] = useState([])
  const [ featureData, setFeatureData] = useState(null)
  const [ blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista total
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      // pegando o feture
      let originals = list.filter( i => i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeatureData(chosenInfo)
        
    }

    loadAll()
  }, [])

  useEffect( () => {
    const scrollListener = () => {
        if(window.scrollY > 20) {
          setBlackHeader(true)
        } else {
          setBlackHeader(false)
        }
    }

    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (


    <div className="page">
      
      <Header black={blackHeader} />

      { featureData &&
        <FeatureMovie item={featureData} />
      }

      <section className="lists">
        { movieList.map( (item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Feito durante o curso ReactJs B7web <br/>
        Direitos de imagem para a Netflix <br/>
        Dados pegos do site Themoviedb.org
      </footer>


        {movieList.length <= 0 &&
          <div className="loading">
            <img src="https://www.filmelier.com/pt/br/news/wp-content/uploads/2020/03/netflix-loading.gif" alt="Carregando" />
          </div>
        }
      
    </div>
  );
}

export default App;
