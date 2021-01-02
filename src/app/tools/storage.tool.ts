/*
 Author: MECHREVO
 Create Time: 2021-01-01 21:44
 Description:
*/

import store from 'good-storage';

export interface StorageTool<T> {
  get: () => T;
  set: (data: T) => T;
}

const storageKeyCache: { [label: string]: boolean } = {};


export const storageKey = (label: string): string => {
  label = label.toLocaleUpperCase();
  if (storageKeyCache[label]) {
    throw new Error(`Storage key "${label}" is not unique"`);
  }
  storageKeyCache[label] = true;
  return `__${label}__`;
};

export const createStorageFactory = <T>(label: string, def?: T): StorageTool<T> => {
  label = storageKey(label);
  return {
    get: (): T => store.session.get(label, def),
    set: (data): T => store.session.set(label, data)
  };
};


