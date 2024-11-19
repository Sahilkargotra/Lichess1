//import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Link } from 'react-router-dom';

// Importing components for Profile, Leaderboard, and Tournaments
import Profile from './components/profile';
import Tournaments from './components/Tournaments';
import Leaderboards from './components/Leaderboards';

// MainPage Component with clickable cards for navigation
const MainPage = () => {
  return (
    <div className="container">
      <h1>Welcome to Lichess!</h1>
      <h2>Select an option</h2>
      <div className="card-container">
        {/* Profile Card */}
        <Link to="/profile" className="card profile-card">
          <div className="icon">👤</div>
          <h3>Profile</h3>
          <p>View your chess profile details</p>
        </Link>

        {/* Leaderboard Card */}
        <Link to="/leaderboards" className="card leaderboard-card">
          <div className="icon">🏆</div>
          <h3>Leaderboard</h3>
          <p>Check out the top chess players</p>
        </Link>

        {/* Tournament Card */}
        <Link to="/tournaments" className="card tournament-card">
          <div className="icon">🏅</div>
          <h3>Tournaments</h3>
          <p>See ongoing chess tournaments</p>
        </Link>
      </div>
    </div>
  );
};

// App Component with Routes for Profile, Leaderboard, and Tournaments
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main page route */}
        <Route path="/" element={<MainPage />} />

        {/* Profile route */}
        <Route path="/profile" element={<Profile />} />

        {/* Leaderboard route */}
        <Route path="/leaderboards" element={<Leaderboards />} />

        {/* Tournaments route */}
        <Route path="/tournaments" element={<Tournaments />} />
      </Routes>
    </Router>
  );
};

export default App;
