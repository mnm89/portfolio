export function debounce(fn: () => void, ms: number) {
  let timer: NodeJS.Timeout | null;
  return () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      timer = null;
      // @ts-ignore
      fn.apply(this, arguments);
    }, ms);
  };
}

export function formatDate(date: Date) {
  const year = `${date.getFullYear()}`;
  const month =
    date.getMonth() < 10 ? `0${date.getMonth()}` : `${date.getMonth()}`;

  return `${year} ${month}`;
}
