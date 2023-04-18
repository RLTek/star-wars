import '../styles/navbar.css';

import { Link } from 'react-router-dom';


export default function Navbar(){


    return(
        <div>
            <ul className="nav">
                <Link className="nav-link" to="/"><li>Home</li></Link>
                <Link className="nav-link" to="/films"><li>Films</li></Link>
                <Link className="nav-link"><li>People</li></Link>
                <Link className="nav-link"><li>Starships</li></Link>
                <Link className="nav-link"><li>Vehicles</li></Link>
                <Link className="nav-link"><li>Species</li></Link>
                <Link className="nav-link"><li>Planets</li></Link>
            </ul>
        </div>
    )
}