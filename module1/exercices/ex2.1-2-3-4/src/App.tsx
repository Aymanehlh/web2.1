function App() {
  return (
    <div className="page">
      <Header pageTitle="Informations sur les films dans les cinémas"  ></Header>
      <Main cinemaName = "UGC DeBrouckère"/>
      <Movie cinemaMovieTitle="Film 1 DB" cinemaMovieDirector="Director A DB"/>
      <Movie cinemaMovieTitle="Film 2 DB" cinemaMovieDirector="Director B DB"/>
      <Main cinemaName= "UGC Toison d'or "/>
      <Movie cinemaMovieTitle="Film 1 TS" cinemaMovieDirector="Director A TS"/>
      <Movie cinemaMovieTitle="Film 2 TS" cinemaMovieDirector="Director B TS"/>
      
    </div>
  );
}
  interface HeaderProps {
    pageTitle : string
    
  }

  interface MainProps {
    cinemaName : string
  
  }

  interface MovieProps {
    cinemaMovieTitle : string
    cinemaMovieDirector : string
  }


    
  
    const Header = (props : HeaderProps)=> {
      return(
        <header>
          <h1 className="pageTitle">{props.pageTitle}</h1>
          
        </header>
      );
    };

    const Main = (props : MainProps) => {
      return(
        <header>
          <h2 className="cinemaName">{props.cinemaName}</h2>
        </header>
      );
    }
    
    const Movie = (props : MovieProps) => {
      return(
        <ul>
          <li className="movie">
            {props.cinemaMovieTitle} - Réalisateur : {props.cinemaMovieDirector}
          </li>
        </ul>
      )
    }

export default App;
