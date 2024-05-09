import "./App.css";
import { GlobalProvider } from "./Context/GlobalState.jsx";
import Header from "./components/Header/Header.jsx";
import MainCard from "./components/MainCard/MainCard.jsx";
import MoviesPagination from "./components/MoviesPagination/MoviesPagination.jsx";
import ShowcaseTrending from "./components/ShowcaseTrending/ShowcaseTrending.jsx";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <MainCard />
        <ShowcaseTrending />
        <MoviesPagination />
      </GlobalProvider>
    </div>
  );
}

export default App;
