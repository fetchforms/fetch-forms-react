import React from 'react';
import { FetchForm, FetchFormsProvider } from '../lib/index';

const FullyManaged = () => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (values) => {
    await sleep(1000);
    console.log('return values', values);
  };
  return (
    <div className=''>
      <FetchFormsProvider permission='ad784124b18825b417ab71426f13f050'>
        <div className='text-3xl'>Fully Managed Form</div>
        <div>
          <FetchForm
            slug='a6e92e44-fe5e-4018-b555-3ed9bd60fc70'
            onSubmit={onSubmit}
          />
        </div>
      </FetchFormsProvider>
    </div>
  );
};

export default FullyManaged;
