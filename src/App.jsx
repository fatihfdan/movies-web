import "./App.css";
import { GlobalProvider } from "./Context/GlobalState.jsx";
import Header from "./components/Header/Header.jsx";
import MainCard from "./components/MainCard/MainCard.jsx";
import Movies from "./components/Movies/Movies.jsx";
import MoviesPagination from "./components/MoviesPagination/MoviesPagination.jsx";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <MainCard />
        <Movies />
        <MoviesPagination />
      </GlobalProvider>
    </div>
  );
}

export default App;
