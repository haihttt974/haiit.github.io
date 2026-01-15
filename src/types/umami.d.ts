export {};

declare global {
  interface Window {
    umami?: {
      // pageview mặc định
      track(): Promise<void> | void;

      // event
      track(eventName: string, data?: Record<string, any>): Promise<void> | void;

      // custom payload (set url, referrer, ...)
      track(
        callback: (props: Record<string, any>) => Record<string, any>
      ): Promise<void> | void;

      identify(data?: Record<string, any>): Promise<void> | void;
    };
  }
}
