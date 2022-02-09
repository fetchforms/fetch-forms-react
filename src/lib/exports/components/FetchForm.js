import React, { useEffect, useState } from 'react';
import { Form } from 'react-final-form';
import useFetchForms from '../hooks/useFetchForms';
import FetchFormItem from './form/FetchFormItem';
import { validate } from './form/Validations';
import '../styles/index.scss';
import useCloudSave from '../hooks/useCloudSave';

const FetchForm = ({ slug, showFormError, onSubmit }) => {
  const [fetchForm, loading, error] = useFetchForms(slug);
  const { status, createSubmission } = useCloudSave();
  const [validations, setValidations] = useState({});
  const [submitError, setSubmitError] = useState(false);

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

    if (fetchForm.cloudSave) {
      await createSubmission(fetchForm.id, formattedValues);
      if (status.error) {
        return setSubmitError(status.error);
      }
    }

    const hasError = await onSubmit(formattedValues);
    if (hasError) {
      setSubmitError(hasError);
    }
  };

  const ErrorMessage = ({ message }) => {
    return (
      <div className='fetch-alert' role='alert'>
        {message}
      </div>
    );
  };

  return (
    <div className='fetch-form'>
      {!loading && error && <ErrorMessage message={error} />}
      {loading && 'Loading...'}
      {!loading && fetchForm && (
        <Form
          onSubmit={submitForm}
          initialValues={{}}
          validate={(values) => {
            const errors = validate(values, validations);
            // console.log(errors);
            return errors;
          }}
          render={({ handleSubmit, submitting, invalid }) => (
            <form onSubmit={handleSubmit} noValidate>
              {fetchForm.formItems.map((formItem) => (
                <FetchFormItem
                  formItem={formItem}
                  key={formItem.fieldHtml.id}
                />
              ))}
              {submitError && <ErrorMessage message={submitError} />}
              <button
                type='submit'
                className='fetch-submit-button'
                disabled={submitting || invalid}
              >
                {fetchForm.submitText}
              </button>
            </form>
          )}
        />
      )}
    </div>
  );
};

export default FetchForm;
