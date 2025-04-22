import axios from 'axios';
import { useEffect, useState } from 'react';
import { url } from '../../assets/helpers';
import { Question } from '../../assets/types';
import './QuestionCard.css';
import { Button } from '../../base/Button/Button';


export const TeacherQuestions = ({questionType} : any) => {
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
  
    console.log('Verified questions:', verifiedQuestions);
    console.log('Question type:', questionType);
  }, []);
  
  const verifiedQuestions = questions.filter((q) => q.isVerified === true);


  return (
    <article className="teacher-questions-section">
      <section className="questions-section">
        {questions.length > 0 && (
          questions.map((data, i) => (
            <section key={i} className={data.isVerified ? 'question-card green' : 'question-card red'}>
              <div className="question-card-details">
              
              <p><b>Fråga: {data.question}</b></p>
              <p>Svar: {data.answer}</p>
              <p>Besvarad av: {data.teacher}</p>
              <p>Taggar: {data.tags != undefined && data.tags.length > 0 && data.tags.join(', ')}</p>
              </div>
              <div className="question-card-actions">
                <Button type="secondary" text={data.isVerified ? 'Redigera' : 'Besvara'} />

                {/* <Button type="secondary" text='Verifiera' /> */}
                <Button type="secondary" text='Ta bort' disabled />
              </div>
              <div className="question-card-status">
              <p>ID: {data.id}</p>
              {/* <p>Status: {data.isVerified ? 'Verifierad' : 'Ej verifierad'}</p> */}
                <p>Skapad: {data.createdAt}</p>
                <p>Senast ändrad: {data.changedAt}</p>
                
              </div>
              
            </section>
          )))}
          </section>
    </article>
  );
};


// Kommentar: Logik för verifiering, loggas vem som verifierat? Vid edit - logga vem som ändrar? Logga tidigare versioner? Senare feature - kunna rapportera frågor och logik för det. 
