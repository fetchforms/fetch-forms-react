import React from 'react';
import { FetchForm, FetchFormsProvider } from '../lib/index';

const FullyManaged = () => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (values) => {
    await sleep(1000);
    // Your logic here
    console.log('return values', values);
  };
  return (
    <div className=''>
      <FetchFormsProvider permission='92a7a5221aef332efa00bd23012ad6b2'>
        <div className='text-3xl'>Managed Form</div>
        <p className='text-gray-500'>
          The easiest way to use Fetch Forms. Pass in a form slug and we'll do
          the rest.
        </p>
        <br />
        <div>
          <FetchForm
            slug='6fa85752-e237-493d-9c63-c441049cb53d'
            onSubmit={onSubmit}
          />
        </div>
      </FetchFormsProvider>
    </div>
  );
};

export default FullyManaged;
