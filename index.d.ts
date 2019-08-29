type Value<T> = { [fieldKey: string]: T };

function setStore<T>(dbName: string, fieldKey: string, fieldValue: T): void;

export function useStatePersist<T>(
  dbName: string,
  fieldKey: string,
  fieldValue: T
): [Value<T>, setStore];

export function removeStatePersist(dbName: string, fieldKey: string): void;

export function debugStatePersist(dbName: string): void;
