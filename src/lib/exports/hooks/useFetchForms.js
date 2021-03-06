import React from 'react';
import { usePermission } from '../FetchFormsProvider';

const useFetchForms = (id, json) => {
  const [fetchForm, setFetchForm] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const token = usePermission();

  React.useEffect(() => {
    const unsubscribe = async () => {
      setLoading(true);

      const endpoint = json ? `build/${id}` : `form/${id}`;

      try {
        const resp = await window.fetch(
          `https://api.fetchforms.io/v1/${endpoint}`,
          {
            method: 'GET',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(json)
          }
        );
        const temp = await resp.json();

        if (!temp.success) {
          throw (
            temp.error ||
            (temp.error && temp.error.message) ||
            'There has been a problem fetching your form'
          );
        }

        setFetchForm(temp.data);
        setError(false);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setFetchForm(null);
        setError((err && err.message) || err);
        setLoading(false);
      }
    };

    unsubscribe();
  }, [id, json, token]);

  const doCloudSave = async (formId, values) => {
    try {
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

      if (resp.status === 204) {
        return { success: true };
      }
      const errorResp = await resp.json();
      throw (
        (errorResp.error && errorResp.error.message) ||
        errorResp.error ||
        'There has been a problem saving your submission.'
      );
    } catch (err) {
      console.error(err);
      return { success: false, message: (err && err.message) || err };
    }
  };

  return [fetchForm, loading, error, doCloudSave];
};

export default useFetchForms;
