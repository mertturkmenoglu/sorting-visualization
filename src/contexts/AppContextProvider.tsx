import { AppContext } from './AppContext';

interface AppContextProviderProps {
  children: React.ReactNode;
}

export function AppContextProvider({
  children,
}: AppContextProviderProps): React.ReactElement {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}
