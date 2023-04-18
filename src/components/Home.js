import '../styles/Home.css';
import Navbar from './navbar.js';

function Home() {
  return (
    <div className="App">
      
      <div className="intro">
      
      <h1 className="title">Welcome to the Star Wars Universe!</h1>
      </div>
      <Navbar />
      <p>Look up information about your favorite Star Wars movies, character, ship and more!</p>
      
    </div>
  );
}

export default Home;
