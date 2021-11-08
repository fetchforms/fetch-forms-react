import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FullyManaged from './examples/FullyManaged';
import Layout from './examples/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<FullyManaged />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
