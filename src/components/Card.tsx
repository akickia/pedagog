import { useState } from 'react';
import { Data2 } from '../types';

type CardProps = {
  data: Data2;
};

const Card = ({ data }: CardProps) => {
  const [showAnswer, setShowAnswer] = useState(false);

  //   return (
  //     <section className={`card`} onClick={() => setShowAnswer(!showAnswer)}>
  //       <p>{data.Q}</p>
  //       {showAnswer && (
  //         <div className="answer">
  //           <p>{data.A}</p>
  //           <small>Pedagog: {data.Ped}</small>
  //         </div>
  //       )}
  //       <hr></hr>
  //     </section>
  //   );
  // };
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
