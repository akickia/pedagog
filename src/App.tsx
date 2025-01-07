import './App.css';
import { Menu } from './components/Menu';
import { Questions } from './components/Questions';
import { Footer } from './components/Footer';

//TODO: Remember that backend isn't online and netlify can't fetch data from it.
//TODO: Fix import from backend/server.js when backend is online.

function App() {
  return (
    <div className="App">
      <article className="start-section">
        <h1>Fråga pedagogen</h1>
        <p className="alert">
          OBS! UNDER UTVECKLING! <br></br> Svar, frågor och namn är ännu
          fiktiva/ genererade och alltså inte korrekta.
        </p>
        <Menu />
      </article>
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
