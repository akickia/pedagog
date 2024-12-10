import './App.css';
import { data } from './assets/data';
import { Menu } from './components/Menu';
import { Data } from './types';
import img from './assets/background-menu.jpg';
import Card from './components/card';

function App() {
  const dummieData: Data[] = data;

  return (
    <div className="App">
      <h1>Fråga pedagogen</h1>
      <Menu />
      <article className="question-section">
        <img src={img}></img>
        <section className="card-section">
          {dummieData.map((data) => (
            <Card data={data} key={data.id} />
          ))}
        </section>
      </article>
      <p className="read-the-docs">Klicka här för att läsa mer om sidan</p>
    </div>
  );
}

export default App;
