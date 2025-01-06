import './App.css';
import { Menu } from './components/Menu';
import { Data, Data2 } from './types';
import img from './assets/background-menu.jpg';
import Card from './components/Card';
//import { fetchQuestionsFromDB } from '../backend/server.js';
import { useEffect, useState } from 'react';
import { data } from './assets/data';

//TODO: Remember that backend isn't online and netlify can't fetch data from it.
//TODO: Fix import from backend/server.js when backend is online.

function App() {
  //const [questions, setQuestions] = useState<Data[]>([]);
  const [questions, setQuestions] = useState<Data2[]>(data);
  console.log(questions);

  // useEffect(() => {
  //   fetchQuestionsFromDB()
  //     .then((data: Data[]) => {
  //       setQuestions(data);
  //       console.log('Questions fetched: ', data);
  //     })
  //     .catch((error: any) => {
  //       console.error('Error fetching questions: ', error);
  //     });
  // }, []);

  return (
    <div className="App">
      <article className="start-section">
        <h1>Fråga pedagogen</h1>
        <h2>OBS! UNDER UTVECKLING!</h2>
        <Menu />
      </article>
      <article className="question-section">
        <img src={img}></img>
        <section className="card-section">
          {questions.length > 0 ? (
            questions.map((data, i) => <Card data={data} key={i} />)
          ) : (
            <p>Hämtar frågor... </p>
          )}
        </section>
      </article>
      <p className="read-the-docs">Klicka här för att läsa mer om sidan</p>
    </div>
  );
}

export default App;
