export {};

declare global {
  interface Window {
    umami?: {
      track: (
        event: string,
        data?: {
          url?: string;
          referrer?: string;
          [key: string]: any;
        }
      ) => Promise<void>;
      identify: (data: Record<string, any>) => void;
    };
  }
}
