export function deelay(mls: number) {
  return new Promise((res) => setTimeout(() => res("Time over"), mls));
}

export const debounce = () => {};
