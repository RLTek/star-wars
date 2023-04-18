import '../styles/films.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './navbar';


export default function Films(){
    const [films, setFilms] = useState({});

    useEffect(() => {
        fetch('https://swapi.dev/api/films')
        .then(res => res.json())
        .then(res => setFilms(res))
    }, [])

    const filmList = films.results?.map(film => <div key={film.title}>
        <Link className="film-link"><h3>{film.title}</h3></Link>
    </div>)
    

console.log(films)

    return(
        <div className="films-page">
            <div className="films-intro">
                <h1 className="films-title">Movies</h1>
                
            </div>
            <Navbar />
            {filmList}
        </div>
    )
}