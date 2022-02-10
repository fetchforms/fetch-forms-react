import React from 'react';
import { FetchFormsProvider } from '../../lib/index';
import HookForm from './HookForm';

const HookParent = () => {
  return (
    <FetchFormsProvider permission={process.env.REACT_APP_FF_TOKEN}>
      <HookForm />
    </FetchFormsProvider>
  );
};

export default HookParent;
