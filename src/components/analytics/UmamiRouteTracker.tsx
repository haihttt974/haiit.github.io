import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function UmamiRouteTracker() {
  const location = useLocation();

  useEffect(() => {
    if (!window.umami) return;

    // HashRouter => lấy cả hash
    const url = location.hash || "/";

    window.umami.track("pageview", {
      url,
      referrer: document.referrer || "",
    });
  }, [location.key]);

  return null;
}
