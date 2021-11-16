import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FullyManaged from './examples/FullyManaged';
import HookParent from './examples/hookform/Parent';
import Layout from './examples/components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<FullyManaged />} />
          <Route path='hookForm' element={<HookParent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
