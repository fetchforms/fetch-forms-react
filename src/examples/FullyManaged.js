import React from 'react';
import { FetchFormsPermission } from '../lib/FetchFormsContext';
import { FetchForm } from '../lib/index';

const FullyManaged = () => {
  return (
    <div className=''>
      <FetchFormsPermission permission='ad784124b18825b417ab71426f13f050'>
        <div className='text-3xl'>Fully Managed Form</div>
        <div>
          <FetchForm slug='a6e92e44-fe5e-4018-b555-3ed9bd60fc70' />
        </div>
      </FetchFormsPermission>
    </div>
  );
};

export default FullyManaged;
