import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import DoctorPage from './pages/DoctorPage';
import DoctorProfilePage from './pages/DoctorProfilePage';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/find-doctors" element = {<DoctorPage/>} />
          <Route path="/doctor/:id" element={<DoctorProfilePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;