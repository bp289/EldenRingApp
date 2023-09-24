import React, {createContext, useContext, useState} from 'react';
import {MMKV} from 'react-native-mmkv';

const MMKVContext = createContext();
const MMKVUpdate = createContext();

export function useBookMarks() {
  return [useContext(MMKVContext), useContext(MMKVUpdate)];
}

export const StorageProvider = ({children}: React.PropsWithChildren<{}>) => {
  const storage = new MMKV();
  const bookMarkJson = storage!.getString('bookMarks')!;
  const [bookMarks, setBookMarks] = useState(JSON.parse(bookMarkJson));

  const updateStorage = newBookMarks => {
    setBookMarks(newBookMarks);
    storage.set('bookMarks', JSON.stringify(newBookMarks));
  };
  return (
    <MMKVContext.Provider value={bookMarks}>
      <MMKVUpdate.Provider value={updateStorage}>
        {children}
      </MMKVUpdate.Provider>
    </MMKVContext.Provider>
  );
};

export default StorageProvider;
