import React from 'react';
import { FetchForm, FetchFormsProvider } from '../lib/index';

const HookForm = () => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (values) => {
    await sleep(1000);
    // return 'We couldnt save your form.';

    console.log('return values', values);
  };
  return (
    <div className=''>
      <FetchFormsProvider permission='ad784124b18825b417ab71426f13f050'>
        <div className='text-3xl'>Hook Form</div>
        <p className='text-gray-500'>
          Fetch a form with the useFetchForm hook and then construct your form
          with custom components and layouts
        </p>
        <br />
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

export default HookForm;
