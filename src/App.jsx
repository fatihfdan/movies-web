import "./App.css";
import Header from "./components/Header/Header.jsx";
import MainCard from "./components/MainCard/MainCard.jsx";
import MainContainer from "./components/MainContainer/MainContainer.jsx";
import MoviesPagination from "./components/MoviesPagination/MoviesPagination.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <MainCard />
      <MainContainer />
      <MoviesPagination />
    </div>
  );
}

export default App;
