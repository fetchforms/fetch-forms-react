import React, { useEffect } from 'react';
import useFetchForms from '../hooks/useFetchForms';

const FetchForm = ({ slug }) => {
  const [form, loading, error] = useFetchForms(slug);

  return (
    <div className='fetch-form'>
      {error && (
        <div
          className='mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'
          role='alert'
        >
          <strong className='font-bold'>There's a problem! </strong>
          <span className='block sm:inline'>{error}</span>
        </div>
      )}
      {loading && 'Loading...'}
      {form && JSON.stringify(form)}
    </div>
  );
};

export default FetchForm;
