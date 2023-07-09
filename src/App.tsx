import React, { lazy, Suspense, useReducer } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { StoreContextWrapper } from './store';
import { globalState, GlobalStateType } from './store/state';

const Market = lazy(() => import('./pages/Market'));

function App() {
  const [state, dispatch] = useReducer((s: GlobalStateType, newValue: Partial<GlobalStateType>) => ({...s, ...newValue}), globalState)
  return (
    <StoreContextWrapper.Provider value={{state, dispatch}}>
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
    </StoreContextWrapper.Provider>
  );
}

export default App;
