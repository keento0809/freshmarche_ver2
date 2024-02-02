export const getLocalStorage = <T = string>(key: string): T | undefined => {
  if (typeof window === undefined) return undefined;

  const item = window.localStorage.getItem(key);

  if (item === null) return undefined;

  try {
    return JSON.parse(item);
  } catch {
    return item as T;
  }
};

export const setLocalStorage = (
  key: string,
  value: number | string | { [key: string | number]: unknown }
): void => {
  if (typeof window === undefined) return undefined;

  if (typeof value === "string") {
    window.localStorage.setItem(key, value);
  }
  window.localStorage.setItem(key, JSON.stringify(value));
};
