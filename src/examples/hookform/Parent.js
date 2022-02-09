import React from 'react';
import { FetchFormsProvider } from '../../lib/index';
import HookForm from './HookForm';

const HookParent = () => {
  return (
    <FetchFormsProvider permission='92a7a5221aef332efa00bd23012ad6b2'>
      <HookForm />
    </FetchFormsProvider>
  );
};

export default HookParent;
