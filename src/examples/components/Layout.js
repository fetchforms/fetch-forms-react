import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

const Layout = () => (
  <div className='bg-gray-200 h-screen w-screen'>
    <main>
      <div className='h-48 bg-purple-500 '>
        <div className='container mx-auto max-w-4xl pt-12'>
          <div className='text-lg mb-2 text-white uppercase'>Form Examples</div>
          <ul class='flex '>
            <li class='mr-3'>
              <Link
                class='inline-block border border-white rounded py-1 px-3 text-white'
                to='/'
              >
                Managed Form
              </Link>
            </li>
            <li class='mr-3'>
              <Link
                class='inline-block border border-white rounded py-1 px-3 text-white'
                to='/hookForm'
              >
                Hook Form
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='container mx-auto max-w-4xl -m-12'>
        <div className='rounded-md bg-white border-gray-300 border p-6 drop-shadow-md'>
          <Outlet />
        </div>
      </div>
    </main>
  </div>
);
export default Layout;
