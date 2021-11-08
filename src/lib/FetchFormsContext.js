import React, { createContext, useContext, useState } from 'react';

export const FormsContext = createContext({});

export const FetchFormsPermission = ({ permission, children }) => {
  const [token] = useState(permission);

  return (
    <FormsContext.Provider value={token}>{children}</FormsContext.Provider>
  );
};

export const usePermission = () => {
  return useContext(FormsContext);
};
