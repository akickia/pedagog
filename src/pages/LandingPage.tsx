import { Menu } from '../components/Hero/Menu';
import { Questions } from '../components/Questions/Questions';

export const LandingPage = () => {
  return (
    <main>
      <article className="start-section">
        <h1>Fråga pedagogen</h1>
        <p className="alert">
          OBS! UNDER UTVECKLING! <br></br> Svar, frågor och namn är ännu
          fiktiva/ genererade och alltså inte korrekta.
        </p>
        <Menu />
      </article>
      <Questions />
    </main>
  );
};
