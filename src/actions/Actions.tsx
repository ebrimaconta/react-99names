export const FILTER = 'FILTER';
export const RESET = 'RESET';
export const NAMES_NULL = 'NAMES_NULL';

export function filterAlp(payload: string) {
  return {
    type: FILTER,
    payload: payload,
  };
}
