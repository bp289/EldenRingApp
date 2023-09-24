import React, {createContext, useContext, useState} from 'react';
import {MMKV} from 'react-native-mmkv';
import {ListItemType} from '../types/pages';

const MMKVContext = createContext<ListItemType[]>([]);
const MMKVUpdate = createContext<(newBookMarks: ListItemType[]) => void>(
  () => {},
);

export function useBookMarks(): [
  ListItemType[],
  (newBookMarks: ListItemType[]) => void,
] {
  return [useContext(MMKVContext), useContext(MMKVUpdate)];
}

export const StorageProvider = ({children}: React.PropsWithChildren<{}>) => {
  const storage = new MMKV();
  const bookMarkJson = storage!.getString('bookMarks')!;
  const [bookMarks, setBookMarks] = useState<ListItemType[]>(
    JSON.parse(bookMarkJson),
  );

  const updateStorage = (newBookMarks: ListItemType[]) => {
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
