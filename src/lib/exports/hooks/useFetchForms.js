import { useState, useEffect } from 'react';

const useFetchForms = (id, json) => {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = async () => {
      setLoading(true);

      const endpoint = json
        ? `http://localhost:8081/build/${id}`
        : `http://localhost:8081/form/${id}`;

      try {
        const resp = await fetch(`http://localhost:8081/${endpoint}`, {
          method: json ? 'POST' : 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(json)
        });
        const temp = await resp.json();
        console.log('form from hook', temp);
        setForm(temp.form);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    unsubscribe();
  }, [id, json]);
  return [form, loading];
};

export default useFetchForms;
