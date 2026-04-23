import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

// ── Pages ─────────────────────────────────
const Home = () => (
  <main>
    <h1>Qognition</h1>
    <p>AI-powered QA automation platform</p>
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/reports">Reports</Link>
    </nav>
  </main>
);

const Dashboard = () => (
  <main>
    <h1>Dashboard</h1>
    <p>Welcome to your QA dashboard</p>
  </main>
);

const Reports = () => (
  <main>
    <h1>Reports</h1>
    <p>Your test reports</p>
  </main>
);

const NotFound = () => (
  <main>
    <h1>404 - Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <Link to="/">Home</Link>
  </main>
);

// ── App ───────────────────────────────────
const App = () => (
  <Router>
    <header>
      <h1>Qognition</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/reports">Reports</Link>
      </nav>
    </header>

    <Routes>
      <Route path="/"          element={<Home />}     />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/reports"   element={<Reports />}   />
      <Route path="*"          element={<NotFound />}  />
    </Routes>
  </Router>
);

export default App;
