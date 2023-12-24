import React from 'react';

interface AppContextState {}

export const appContextDefaultValues: AppContextState = {};

export const AppContext = React.createContext<AppContextState>(
  appContextDefaultValues
);
