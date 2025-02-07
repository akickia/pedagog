import { useState } from 'react';
import { About } from '../About/About';
import { Form } from '../../base/Form/Form';
import { Button } from '../../base/Button/Button';

export const Menu = () => {
  const [showForm, setShowForm] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  return (
    <>
      <article className={'menu-section' + (showForm ? ' blur' : '')}>
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
          <Button
            type={'primary'}
            text="Ställ en fråga"
            action={() => setShowForm((state) => !state)}
          />
          {!showAbout && (
            <Button
              type={'primary'}
              text="Mer om sidan"
              action={() => setShowAbout((state) => !state)}
            />
          )}
        </section>
      </article>

      {showAbout && (
        <article className="about-section">
          <Button
            type="close secondary"
            text="X"
            action={() => setShowAbout(false)}
          />
          <About />
        </article>
      )}

      {showForm && (
        <article className="form-section">
          <Button
            type="close secondary"
            text="X"
            action={() => setShowForm(false)}
          />

          <h2>Ställ din fråga om förskolan</h2>
          <p>
            Här kan du ställa en fråga om förskolan och förskolans verksamhet.
            Ingen fråga är för liten eller stor. Tänk på att vi inte kan svara
            på frågor om hur just er förskola gör, utan svarar utifrån allmänna
            råd och läroplaner. Lämna aldrig ut information om den enskilda
            förskolan eller enskilda barn av integritetsskäl.{' '}
          </p>
          <p>Vår ambition är att svara på din fråga inom en vecka.</p>
          <Form
            form="addQuestion"
            placeholder="Ställ din fråga här"
            close={setShowForm}
          />
        </article>
      )}
    </>
  );
};
