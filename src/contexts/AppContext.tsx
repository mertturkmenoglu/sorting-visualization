import React from 'react';
import { TAlgorithm } from '../../lib/algorithms';

interface AppContextState {
  algorithm: TAlgorithm;
  setAlgorithm: React.Dispatch<React.SetStateAction<TAlgorithm>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export const appContextDefaultValues: AppContextState = {
  algorithm: 'Bubble Sort',
  count: 8,
  setAlgorithm: () => {},
  setCount: () => {},
};

export const AppContext = React.createContext<AppContextState>(
  appContextDefaultValues
);
