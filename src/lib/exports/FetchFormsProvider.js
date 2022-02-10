import React from 'react';

export const FormsContext = React.createContext({});

export const FetchFormsProvider = ({ permission, children }) => {
  const [token] = React.useState(permission);

  return (
    <FormsContext.Provider value={token}>{children}</FormsContext.Provider>
  );
};

export const usePermission = () => {
  return React.useContext(FormsContext);
};
