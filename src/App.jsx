import "./App.css";
import { GlobalProvider } from "./Context/GlobalState.jsx";
import Header from "./components/Header/Header.jsx";
import MainContainer from "./components/MainContainer/MainContainer.jsx";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <MainContainer />
      </GlobalProvider>
    </div>
  );
}

export default App;
