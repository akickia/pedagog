import axios from 'axios';
import { useEffect, useState } from 'react';
import { url } from '../../assets/helpers';
import { Question } from '../../assets/types';
import './QuestionCard.css';
import { Button } from '../../base/Button/Button';

export const TeacherQuestions = () => {
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
    console.log('In fetch');
  }, []);

  // const handleEdit = (id: string) => {
  //   console.log('Edit question with ID:', id);
  //   axios
  //     .put(`${url}/question/edit`, {
  //       question: text,
  //     })
  //     .then((response) => {
  //       console.log('Form submitted: ', response);
  //       setText('');
  //       setConfirmationMsg('Frågan är nu redigerad!');
  //       setShowConfirmation(true);
  //     })
  //     .catch((error) => {
  //       console.error('Something went wrong: ', error);
  //     });
  // };
  // Implement edit functionality here

  // const verifiedQuestions = questions.filter((q) => q.isVerified === true);
  //TODO: Filter questions based on questionType/Verified/Unanswered

  return (
    <article className="teacher-questions-section">
      <section className="questions-section">
        {questions.length > 0 &&
          questions.map((data, i) => (
            <section
              key={i}
              className={
                data.isVerified ? 'question-card green' : 'question-card red'
              }
            >
              <div className="question-card-details">
                <p>
                  <b>{data.question}</b>
                </p>
                {data.answer && (
                  <>
                    <p>{data.answer}</p>
                    <p>
                      <small>Besvarad av: {data.teacher}</small>
                    </p>
                    <p>
                      <small>
                        Taggar:{' '}
                        {data.tags != undefined &&
                          data.tags.length > 0 &&
                          data.tags.join(', ')}
                      </small>
                    </p>
                  </>
                )}
              </div>
              <div className="question-card-actions">
                <Button
                  type="secondary"
                  text={data.isVerified ? 'Redigera' : 'Besvara'}
                  action={() => console.log(data.id)}
                />

                {/* <Button type="secondary" text='Verifiera' /> */}
                <Button type="secondary" text="Ta bort" disabled />
              </div>
              <div className="question-card-status">
                <p>ID: {data.id}</p>
                {/* <p>Status: {data.isVerified ? 'Verifierad' : 'Ej verifierad'}</p> */}
                <p>Skapad: {data.createdAt}</p>
                <p>Senast ändrad: {data.changedAt}</p>
              </div>
            </section>
          ))}
      </section>
    </article>
  );
};

// Kommentar: Logik för verifiering, loggas vem som verifierat? Vid edit - logga vem som ändrar? Logga tidigare versioner? Senare feature - kunna rapportera frågor och logik för det.
