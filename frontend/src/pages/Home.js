import React from 'react';
import '../pages/styles/Home.css';
import Banner from '../components/Banner'
import Header from '../components/Header'
import Grid from '../components/Grid'
import Search from "../components/Search";
import axios from "axios";
//import metodo api para la busqueda

// ES7 snippets to do 'rfce'

function Home() {
  const [results, setResults] = React.useState([]);
  const [showSearch, setShowSearch] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://motsi-mintic2.herokuapp.com/api/v1/get_activities/')
    .then(response => {setResults(response.data) 
    console.log(response)
    return(response.data)});

  }, []);

  return (
    <div className="home">
      <Header />
      <Banner showSearch={showSearch} setShowSearch={setShowSearch} />

      <div className="home__section">
        <Grid results={results} />
      </div>
      {showSearch ? <Search /> : null}
    </div>
  );
}

export default Home