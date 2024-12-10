import { useState } from 'react';
import { Data } from '../types';

type CardProps = {
  data: Data;
};

const Card = ({ data }: CardProps) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <section className={`card`} onClick={() => setShowAnswer(!showAnswer)}>
      <p>{data.question}</p>
      {showAnswer && (
        <div className="answer">
          <p>{data.answer}</p>
          <small>Pedagog: {data.pedagog}</small>
        </div>
      )}
      <hr></hr>
    </section>
  );
};

export default Card;
