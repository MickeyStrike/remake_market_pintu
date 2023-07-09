import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const Market = lazy(() => import('./pages/Market'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/market" element={<Market/>}/>
          <Route
            path="/"
            element={<Navigate to="/market" replace />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
