import React from 'react';
import useFetchForms from '../hooks/useFetchForms';
import FetchFormItem from './form/FetchFormItem';

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
      {form &&
        form.formItems.map((formItem) => (
          <FetchFormItem formItem={formItem} key={formItem.name} />
        ))}
    </div>
  );
};

export default FetchForm;
