import React from 'react';
import { Form } from 'react-final-form';
import useFetchForms from '../hooks/useFetchForms';
import FetchFormItem from './form/FetchFormItem';

const FetchForm = ({ slug, onSubmit }) => {
  const [fetchForm, loading, error] = useFetchForms(slug);
  console.log(fetchForm);

  const submitForm = async (values) => {
    console.log('cloud save', values);

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
      {fetchForm && (
        <Form
          onSubmit={submitForm}
          initialValues={{}}
          // validate={(values) => {
          //   const errors = {};
          //   if (!values.fullName) {
          //     errors.fullName = 'Required';
          //   }
          //   return errors;
          // }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit} noValidate>
              {fetchForm.formItems.map((formItem) => (
                <FetchFormItem formItem={formItem} key={formItem.name} />
              ))}
              <div className='mt-4'>
                <button
                  type='submit'
                  className={`text-white bg-brand focus:ring-4 rounded-lg px-5 py-2.5 text-center ${
                    submitting || pristine
                      ? 'opacity-50 cursor-not-allowed'
                      : 'opacity-100'
                  }`}
                  disabled={submitting || pristine}
                >
                  {form.submitText || 'Submit'}
                </button>
              </div>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          )}
        />
      )}
    </div>
  );
};

export default FetchForm;
