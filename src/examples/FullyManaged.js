import React from 'react';
import { FetchForm } from '../lib/index';

const FullyManaged = () => {
  return (
    <div className=''>
      <div className='text-3xl'>Fully Managed Form</div>
      <div>
        <FetchForm></FetchForm>
      </div>
    </div>
  );
};

export default FullyManaged;
