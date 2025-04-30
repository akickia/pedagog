import { Outlet } from 'react-router-dom';
import { Hero } from '../components/Hero/Hero';
import { Button } from '../base/Button/Button';
import { About } from '../components/About/About';
import { Form } from '../base/Form/Form';
import { useState } from 'react';
import { FormSection } from '../base/Form/FormSection';

export const LandingPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <main>
      <article className="start-section">
        <h1>Fråga pedagogen</h1>
        <p className="alert">
          OBS! UNDER UTVECKLING! <br></br> Svar, frågor och namn är ännu
          fiktiva/ genererade och alltså inte korrekta.
        </p>
        <Hero />
      </article>
      <Outlet />
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
        <FormSection
          heading={'Ställ din fråga om förskolan'}
          text={
            'Här kan du ställa en fråga om förskolan och förskolans verksamhet. Ingen fråga är för liten eller stor. Tänk på att vi inte kan svara på frågor om hur just er förskola gör, utan svarar utifrån allmänna råd och läroplaner. Lämna aldrig ut information om den enskilda förskolan eller enskilda barn av integritetsskäl. Vår ambition är att svara på din fråga inom en vecka.'
          }
          onClose={() => setShowForm(false)}
        >
          <Form
            form="addQuestion"
            placeholder="Ställ din fråga om förskolan"
            close={setShowForm}
          />
        </FormSection>
      )}
    </main>
  );
};
