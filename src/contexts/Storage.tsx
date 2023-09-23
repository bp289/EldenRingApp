import React, {createContext} from 'react';
import {MMKV} from 'react-native-mmkv';

interface MMKVContextProps {
  storage: MMKV;
}

const MMKVContext = createContext<MMKVContextProps | undefined>(undefined);

export const MMKVProvider = ({children}: React.PropsWithChildren<{}>) => {
  const storage = new MMKV();

  return (
    <MMKVContext.Provider value={{storage}}>{children}</MMKVContext.Provider>
  );
};

export default MMKVContext;
