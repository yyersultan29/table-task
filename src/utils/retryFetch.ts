export async function retryFetch(
  url: string,
  { retryCount, timeout }: { retryCount: number; timeout: number },
) {
  // inital request
  retryCount = retryCount - 1;
  const response = await fetch(url);
  console.log(response);

  if (!response.ok) {
    if (retryCount === 0) {
      const lastResponse = await fetch(url);

      setTimeout(() => {
        return lastResponse.statusText;
      }, timeout);
    } else {
      retryFetch(url, { retryCount: retryCount - 1, timeout });
    }
  } else {
    const data = response.json();
    return data;
  }
}
