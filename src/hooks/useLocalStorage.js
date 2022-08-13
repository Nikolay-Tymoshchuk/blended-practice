import { useState } from 'react';

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState('');

  const storage = window.localStorage.getItem(key);
  if (!storage) storage.setItem(JSON.stringify(value));
  else return value;
};
