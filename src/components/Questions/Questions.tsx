import { Question } from '../../assets/types';
import img from '../../assets/background-menu.jpg';
import Card from './Card';
import { useEffect, useState } from 'react';
import { QuestionsNav } from './QuestionsNav';
import axios from 'axios';
import './Questions.css';

const url = import.meta.env.VITE_API_URL;
export const Questions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    axios
      .get(`${url}/question/all`)
      .then((response) => {
        console.log(response.data.questions);
        setQuestions(response.data.questions);
      })
      .catch((error) => {
        console.error('Error fetching questions: ', error);
      });
  }, []);

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
