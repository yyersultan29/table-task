export function deelay(mls: number) {
  return new Promise((res) => setTimeout(() => res("Time over"), mls));
}

export const debounce = (func: (...args: any[]) => any, wait: number = 500) => {
  let timeout: any;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
