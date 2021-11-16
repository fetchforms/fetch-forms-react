import React from 'react';
import { FetchFormsProvider } from '../../lib/index';
import HookForm from './HookForm';

const HookParent = () => {
  return (
    <FetchFormsProvider permission='ad784124b18825b417ab71426f13f050'>
      <HookForm />
    </FetchFormsProvider>
  );
};

export default HookParent;
