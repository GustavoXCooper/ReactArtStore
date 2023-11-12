import Menu from "./components/menu/Menu";
import Router from './routes/Router'
function App() {
  return (
    <div>
      <Router>
        <Menu/>
      </Router>
    </div>
  );
}

export default App;
