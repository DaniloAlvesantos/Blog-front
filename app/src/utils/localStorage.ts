type setLocalStorageProps = {
  key: string;
  value: object;
};

export const handleSetLocalStorage = ({ key, value }: setLocalStorageProps) => {
  if (!value && !key) {
    return;
  }

  const data = JSON.stringify(value);
  return window.localStorage.setItem(key, data);
};

export const handleGetLocalStorage = (
  key: string,
) => {
  if (!key) {
    return;
  }

  const data: any = window.localStorage.getItem(key);
  return data;
};
