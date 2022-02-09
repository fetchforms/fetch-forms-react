import React from 'react';
import { FetchFormsProvider } from '../../lib/index';
import HookForm from './HookForm';

const HookParent = () => {
  return (
    <FetchFormsProvider permission='API_TOKEN'>
      <HookForm />
    </FetchFormsProvider>
  );
};

export default HookParent;
