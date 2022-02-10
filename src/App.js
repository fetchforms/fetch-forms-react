import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ManagedForm from './examples/ManagedForm';
import HookParent from './examples/hookForm/Parent';
import Layout from './examples/components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<ManagedForm />} />
          <Route path='hookForm' element={<HookParent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
