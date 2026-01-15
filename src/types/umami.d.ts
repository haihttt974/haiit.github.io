export {};

declare global {
  interface Window {
    umami?: {
      track: (...args: any[]) => any;
      trackView?: (url?: string) => any;
    };
  }
}
