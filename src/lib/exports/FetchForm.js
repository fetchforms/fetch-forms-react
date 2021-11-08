import React from 'react';
import useFetchForms from './hooks/useFetchForms';

const FetchForm = () => {
  const [form, loading] = useFetchForms('a6e92e44-fe5e-4018-b555-3ed9bd60fc70');

  return (
    <div className='fetch-form'>
      {loading ? 'Loading...' : JSON.stringify(form)}
    </div>
  );
};

export default FetchForm;
