import { Question } from '../../assets/types';
import img from '../../assets/background-menu.jpg';
import Card from './Card';
import { useEffect, useState } from 'react';
import { QuestionsNav } from './QuestionsNav';
import axios from 'axios';
import './Questions.css';
import { useParams } from 'react-router-dom';

const url = import.meta.env.VITE_API_URL;
export const Questions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const { keywords } = useParams();

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

    console.log('Keywords from URL:', keywords);
    console.log('Verified questions:', verifiedQuestions);
    console.log('Filtered questions:', filteredQuestions);
  }, []);

  const verifiedQuestions = questions.filter((q) => q.isVerified === true);
  // Filtrera frågor baserat på kategori från URL
  const filteredQuestions =
    keywords && keywords !== 'all'
      ? verifiedQuestions.filter((q) => q.tags.includes(keywords)) // Kolla om nyckelordet finns i listan
      : verifiedQuestions;

  return (
    <article className="question-section">
      <QuestionsNav />
      <section className="questions-section">
        <img src={img} alt="Background" />
        <section className="card-section">
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((data, i) => <Card data={data} key={i} />)
          ) : (
            <p>Inga frågor i denna kategori.</p>
          )}
        </section>
      </section>
    </article>
  );
};
