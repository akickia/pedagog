import { useState } from 'react';
import { Question } from '../../assets/types';

type CardProps = {
  data: Question;
};

const Card = ({ data }: CardProps) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <section
      className={`card`}
      tabIndex={0}
      onClick={() => setShowAnswer(!showAnswer)}
      onBlur={() => setShowAnswer(false)}
    >
      <p>{data.question}</p>
      {showAnswer && (
        <div className="answer">
          <p>{data.answer}</p>
          <small>Pedagog: {data.teacher}</small>
        </div>
      )}
      <hr></hr>
    </section>
  );
};

export default Card;
