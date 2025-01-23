import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Organizations from './pages/Organizations';
import Resources from './pages/Resources';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/organizations" element={<Organizations />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Layout>
  );
}

export default App;