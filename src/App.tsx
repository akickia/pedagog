import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { Footer } from './base/Footer';
import { LandingPage } from './pages/LandingPage';
import { TeacherPage } from './pages/TeacherPage';
import { Questions } from './components/Questions/Questions';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />}>
          <Route index element={<Navigate to="questions/all" replace />} />
          <Route path="questions/:keywords" element={<Questions />} />
            
          </Route>
          <Route path="/admin" element={<TeacherPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
