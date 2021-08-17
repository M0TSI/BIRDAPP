import React from 'react';
import '../pages/styles/Home.css';
import Banner from '../components/Banner'
import Header from '../components/Header'
import Grid from '../components/Grid'
import Search from "../components/Search";

//import metodo api para la busqueda

// ES7 snippets to do 'rfce'

function Home() {
  const [results, setResults] = React.useState([]);
  const [showSearch, setShowSearch] = React.useState(false);

  React.useEffect(() => {
    // getSearchResults(filtros).then((response)=>{
    //   setResults(response)
    // })
    //aqui consultar metodo busqueda con los filtros por defecto
    setResults([
      {
        src: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
        title: "Titulo",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, mollitia.",
        price: "$120/noche",
        units: "por noche", //valor adicional????
      },
      {
        src: "https://images.unsplash.com/photo-1600299871181-d70762d374f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=818&q=80",
        title: "Titulo 2",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi cupiditate atque ipsa.",
        price: "$110/noche",
      },
      {
        src: "https://images.unsplash.com/photo-1588367374023-7bd7c113c41c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80",
        title: "Titulo 3",
        description: " Lorem ipsum dolor,",
        price: "$150/noche",
      },
    ]);
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