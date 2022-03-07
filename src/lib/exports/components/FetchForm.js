import React from 'react';
import { Form } from 'react-final-form';
import useFetchForms from '../hooks/useFetchForms';
import FetchFormItem from './form/FetchFormItem';
import { validate } from '../scripts/Validations';
import '../../../lib_styles/index.scss';

const FetchForm = ({ slug, showFormError, onSubmit, onLoad }) => {
  const [fetchForm, loading, error, doCloudSubmit] = useFetchForms(slug);
  const [validations, setValidations] = React.useState({});
  const [submitError, setSubmitError] = React.useState(false);

  React.useEffect(() => {
    if (fetchForm) {
      if (onLoad) {
        const { formItems, ...noFields } = fetchForm;
        onLoad(noFields);
      }

      setValidations(
        fetchForm.formItems.map((item) => ({
          name: item.name,
          rules: item.validation
        }))
      );
    }
  }, [fetchForm, onLoad]);

  React.useEffect(() => {
    if (showFormError) {
      setSubmitError(showFormError);
    }
  }, [showFormError]);

  const submitForm = async (values) => {
    setSubmitError(false);

    const formattedValues = {
      ...values
    };
    const valueKeys = Object.keys(values);

    for (let i = 0; i < valueKeys.length; i++) {
      const fieldType = fetchForm.formItems.find(
        (item) => item.name === valueKeys[i]
      );

      if (fieldType.type === 'number') {
        formattedValues[valueKeys[i]] = parseInt(values[valueKeys[i]]);
      } else {
        formattedValues[valueKeys[i]] = values[valueKeys[i]];
      }
    }

    try {
      if (fetchForm.cloudSave) {
        const isSaved = await doCloudSubmit(fetchForm.id, formattedValues);
        if (!isSaved.success) {
          throw isSaved.message;
        }
      }

      const hasError = await onSubmit(formattedValues);
      if (hasError) {
        throw hasError;
      }
    } catch (err) {
      console.log(err);
      setSubmitError(err);
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
                {submitting ? 'Saving...' : fetchForm.submitText}
              </button>
            </form>
          )}
        />
      )}
    </div>
  );
};

export default FetchForm;
