import { useState } from 'react';
import { About } from '../About/About';
import { Form } from '../../base/Form/Form';
import { Button } from '../../base/Button/Button';

export const Hero = () => {

  return (
      <article className="hero">
        <section className="hero-intro">
          <p>
            Ny till förskolans värld? Eller har du någonsin undrat något om
            förskolans verksamhet? Det finns inga dumma frågor!
          </p>
          <p>
            Här kan du läsa vanliga frågor och svar eller ställa egna frågor som
            besvaras av pedagoger i förskolan.
          </p>
        </section>
      </article>
  );
};
