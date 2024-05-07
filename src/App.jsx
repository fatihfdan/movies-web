import "./App.css";
import Header from "./components/Header/Header.jsx";
import MainCard from "./components/MainCard/MainCard.jsx";
import MoviesPagination from "./components/MoviesPagination/MoviesPagination.jsx";
import ShowcaseTrending from "./components/ShowcaseTrending/ShowcaseTrending.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <MainCard />
      <ShowcaseTrending />
      <MoviesPagination />
    </div>
  );
}

export default App;
