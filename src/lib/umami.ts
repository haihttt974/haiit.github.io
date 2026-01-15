const UMAMI_PROXY = "https://haiit-umami-proxy.leduyhai090704.workers.dev";

export async function fetchViews(path: string): Promise<number> {
  const res = await fetch(
    `${UMAMI_PROXY}/views?path=${encodeURIComponent(path)}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch views");
  }

  const data = await res.json();

  // Worker có thể trả views hoặc total
  return data.views ?? data.total ?? 0;
}
