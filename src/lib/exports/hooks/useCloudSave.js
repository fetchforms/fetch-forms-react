import { useState } from 'react';
import { usePermission } from '../FetchFormsProvider';

const useCloudSave = async () => {
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const token = usePermission();

  // TODO: Test this
  const doCloudSave = async (formId, values) => {
    try {
      setSaving(true);
      setError(false);

      const respBody = values
        ? { submission: values }
        : { record_conversion: true };

      const resp = await window.fetch(
        `https://api.fetchforms.io/v1/form/${formId}/submission`,
        {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(respBody)
        }
      );

      const temp = await resp.json();
      // console.log('form from hook', temp);

      if (!temp.success) {
        throw (
          (temp.error && temp.error.message) ||
          temp.error ||
          'There has been a problem saving your submission.'
        );
      }

      setSuccess(temp.success);
    } catch (err) {
      console.error(err);
      setSuccess(false);
      setError((err && err.message) || err);
    } finally {
      setSaving(false);
    }
  };

  const createSubmission = async (formId, values) => {
    await doCloudSave(formId, values);
  };

  return { status: { saving, success, error }, createSubmission };
};

export default useCloudSave;
