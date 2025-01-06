import { useState } from 'react';
import { About } from './About';
import { Form } from './Form';

export const Menu = () => {
  const [showForm, setShowForm] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  return (
    <>
      <article className="menu-section">
        <section className="menu-intro">
          <p>
            Ny till förskolans värld? Eller har du någonsin undrat något om
            förskolans verksamhet? Det finns inga dumma frågor!
          </p>
          <p>
            Här kan du läsa vanliga frågor och svar eller ställa egna frågor som
            besvaras av pedagoger i förskolan.
          </p>
        </section>
        <section className="menu-btns">
          <button onClick={() => setShowForm((state) => !state)}>
            Ställ en fråga
          </button>
          <button>Svara på en fråga</button>
          {!showAbout && (
            <button onClick={() => setShowAbout((state) => !state)}>
              Mer om sidan
            </button>
          )}
        </section>
      </article>
      <article className="about-section">
        {showAbout && (
          <>
            <button className="secondary" onClick={() => setShowAbout(false)}>
              Stäng info
            </button>{' '}
            <About />
          </>
        )}
      </article>
      {showForm && <Form setShowForm={setShowForm} />}
    </>
  );
};
