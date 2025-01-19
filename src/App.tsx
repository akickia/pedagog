import './App.css';
import { Menu } from './components/Menu';
import { Questions } from './components/Questions';
import { Footer } from './components/Footer';
//import { Teacher } from './components/Teacher';

function App() {
  return (
    <div className="App">
      <article className="start-section">
        <h1>Fråga pedagogen</h1>
        <p className="alert">
          OBS! UNDER UTVECKLING! <br></br> Svar, frågor och namn är ännu
          fiktiva/ genererade och alltså inte korrekta.
        </p>
        {/* <Teacher /> */}
        <Menu />
      </article>
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
