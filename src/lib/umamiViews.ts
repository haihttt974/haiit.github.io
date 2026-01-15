const UMAMI_PROXY_BASE = "https://haiit-umami-proxy.leduyhai090704.workers.dev";

export async function fetchViews(path: string): Promise<number> {
  const res = await fetch(`${UMAMI_PROXY_BASE}/views?path=${encodeURIComponent(path)}`);
  if (!res.ok) return 0;
  const data = await res.json();
  return Number(data.views ?? data.total ?? 0);
}
