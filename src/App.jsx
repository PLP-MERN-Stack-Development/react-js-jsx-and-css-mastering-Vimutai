import { useState } from 'react';
// REMOVE THIS LINE: import "./App.css";

// Import your components here
import { ThemeProvider } from './context/ThemeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Users from './pages/Users';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;