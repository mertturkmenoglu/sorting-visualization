import { useState } from 'react';
import { AppContext, appContextDefaultValues } from './AppContext';
import { TAlgorithm } from '../../lib/algorithms';

interface AppContextProviderProps {
  children: React.ReactNode;
}

export function AppContextProvider({
  children,
}: AppContextProviderProps): React.ReactElement {
  const [algorithm, setAlgorithm] = useState<TAlgorithm>(
    appContextDefaultValues.algorithm
  );
  const [count, setCount] = useState(appContextDefaultValues.count);

  return (
    <AppContext.Provider
      value={{
        algorithm,
        setAlgorithm,
        count,
        setCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
