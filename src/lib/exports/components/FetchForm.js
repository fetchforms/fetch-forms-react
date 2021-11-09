import React from 'react';
import useFetchForms from '../hooks/useFetchForms';
import FetchFormItem from './form/FetchFormItem';

const FetchForm = ({ slug, onSubmit }) => {
  const [form, loading, error] = useFetchForms(slug);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit', e);
    console.log('cloud save', form.cloudSave);

    // onSubmit(e);
  };

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
      {form && (
        <form onSubmit={handleSubmit} noValidate>
          {form.formItems.map((formItem) => (
            <FetchFormItem formItem={formItem} key={formItem.name} />
          ))}
          <div className='mt-4'>
            <button
              type='submit'
              className='text-white bg-brand focus:ring-4 rounded-lg px-5 py-2.5 text-center'
            >
              {form.submitText || 'Submit'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FetchForm;
