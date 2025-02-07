import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './base/Footer';
import { LandingPage } from './pages/LandingPage';
import { TeacherPage } from './pages/TeacherPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin" element={<TeacherPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
