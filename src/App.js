import "./App.css";
import { useFetch } from "./hooks/useFetch";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
