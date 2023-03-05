import React,{ useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import Register from './pages/Register';

function App() {
  const [user, setUser] = useState();
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register setUser={ setUser }/>} /> 
        <Route path="/landing" element={<Landing user={ user }/>} />
        </Routes>
        </BrowserRouter>
  );
}

export default App;