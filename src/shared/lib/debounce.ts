export const debounce = <T extends (...args: unknown[]) => void>(
  cb: T,
  delay: number
) => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      cb(...args);
      timeoutId = null;
    }, delay);
  };
};
