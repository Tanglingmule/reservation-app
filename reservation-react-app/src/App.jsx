import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './loginPage';
import MainPage from './mainPage';
import RegisterPage from './registerPage';
import RewardsPage from './rewardsPage';
import MakeReservationPage from './makeReservationPage';
import DeleteReservationPage from './deleteReservationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/rewards" element={<RewardsPage/>}/>
        <Route path="/makereservation" element={<MakeReservationPage/>}/>
        <Route path="/deletereservation" element={<DeleteReservationPage/>}/>
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
