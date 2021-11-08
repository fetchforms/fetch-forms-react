import { Outlet } from 'react-router';

const Layout = () => (
  <div className='bg-gray-200 h-screen w-screen'>
    <main>
      <div className='h-52 bg-purple-500 '></div>
      <div className='container mx-auto max-w-4xl -m-12'>
        <div className='rounded-md bg-white border-gray-300 border p-6 drop-shadow-md'>
          <Outlet />
        </div>
      </div>
    </main>
  </div>
);
export default Layout;
