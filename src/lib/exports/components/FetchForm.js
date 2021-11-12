import React, { useEffect, useState } from 'react';
import { Form } from 'react-final-form';
import useFetchForms from '../hooks/useFetchForms';
import FetchFormItem from './form/FetchFormItem';
import { validate } from './form/Validations';
import '../styles/index.scss';

const FetchForm = ({ slug, showFormError, onSubmit }) => {
  const [fetchForm, loading, error] = useFetchForms(slug);
  const [validations, setValidations] = useState({});
  const [submitError, setSubmitError] = useState(false);
  // const [submissionId, setSubmissionId] = useState(null);

  useEffect(() => {
    if (fetchForm) {
      setValidations(
        fetchForm.formItems.map((item) => ({
          name: item.name,
          rules: item.validation
        }))
      );
    }
  }, [fetchForm]);

  useEffect(() => {
    if (showFormError) {
      setSubmitError(showFormError);
    }
  }, [showFormError]);

  const submitForm = async (values) => {
    setSubmitError(false);

    const formattedValues = {
      ...values
    };
    const keys = Object.keys(values);
    for (let i = 0; i < keys.length; i++) {
      if (typeof values[keys[i]] !== 'boolean' && !isNaN(values[keys[i]])) {
        formattedValues[keys[i]] = parseInt(values[keys[i]]);
      } else {
        formattedValues[keys[i]] = values[keys[i]];
      }
    }

    // TODO: submit to fetch forms if cloudsave is enabled
    // return setSubmitError('Age requires a valid number to be set');
    const hasError = await onSubmit(formattedValues);
    if (hasError) {
      setSubmitError(hasError);
    }
  };

  const errorMessage = (message) => {
    return (
      <div className='fetch-alert' role='alert'>
        <span className='block sm:inline'>{message}</span>
      </div>
    );
  };

  return (
    <div className='fetch-form'>
      {error && errorMessage(error)}
      {loading && 'Loading...'}
      {fetchForm && (
        <Form
          onSubmit={submitForm}
          initialValues={{}}
          validate={(values) => {
            return validate(values, validations);
          }}
          render={({ handleSubmit, form, submitting, invalid }) => (
            <form onSubmit={handleSubmit} noValidate>
              {fetchForm.formItems.map((formItem) => (
                <FetchFormItem formItem={formItem} key={formItem.name} />
              ))}
              {submitError && errorMessage(submitError)}
              <button
                type='submit'
                className='fetch-submit-button'
                disabled={submitting || invalid}
              >
                {form.submitText || 'Submit'}
              </button>
            </form>
          )}
        />
      )}
    </div>
  );
};

export default FetchForm;
