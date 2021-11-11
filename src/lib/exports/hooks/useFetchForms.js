import { useState, useEffect } from 'react';
import { usePermission } from '../FetchFormsProvider';

const useFetchForms = (id, json) => {
  const [fetchForm, setFetchForm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const token = usePermission();

  useEffect(() => {
    const unsubscribe = async () => {
      setLoading(true);

      const endpoint = json ? `build/${id}` : `form/${id}`;

      try {
        // console.log('auth', token);

        const resp = await window.fetch(`http://localhost:8081/${endpoint}`, {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(json)
        });
        const temp = await resp.json();
        // console.log('form from hook', temp);
        if (resp.status !== 200 || !temp.success) {
          throw (
            temp.error ||
            (temp.error && temp.error.message) ||
            'There has been a problem fetching your form'
          );
        }

        setFetchForm(temp.data);
        setLoading(false);
        setError(false);
      } catch (err) {
        console.error(err);
        setFetchForm({});
        setLoading(false);
        setError((err && err.message) || err);
      }
    };

    unsubscribe();
  }, [id, json, token]);
  return [fetchForm, loading, error];
};

export default useFetchForms;
