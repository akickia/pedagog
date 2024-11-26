import './App.css';
import { data } from './assets/data';
import Card from './components/card';
import { Data } from './types';

function App() {
  const dummieData: Data[] = data;

  return (
    <div className="App">
      <h1>Fråga pedagogen</h1>
      {dummieData.map((data) => (
        <Card data={data} key={data.id} />
      ))}

      <p className="read-the-docs">Klicka här för att läsa mer om sidan</p>
    </div>
  );
}

export default App;
