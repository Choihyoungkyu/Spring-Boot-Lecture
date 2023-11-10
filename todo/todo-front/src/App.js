import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Router from './router/Router';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="*" element={<Router />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
