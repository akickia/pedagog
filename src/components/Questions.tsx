import { Data, Data2 } from '../types';
import img from '../assets/background-menu.jpg';
import Card from './Card';
//import { fetchQuestionsFromDB } from '../backend/server.js';
import { useEffect, useState } from 'react';
import { data } from '../assets/data';
import { QuestionsNav } from './QuestionsNav';

export const Questions = () => {
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
    <article className="question-section">
      <QuestionsNav />
      <section className="questions-section">
        <img src={img}></img>
        <section className="card-section">
          {questions.length > 0 ? (
            questions.map((data, i) => <Card data={data} key={i} />)
          ) : (
            <p>Hämtar frågor... </p>
          )}
        </section>
      </section>
    </article>
  );
};
