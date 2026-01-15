import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function getUmamiUrl() {
  const hash = window.location.hash || "";
  const path = hash.startsWith("#") ? hash.slice(1) : hash;
  return path || "/";
}

export default function UmamiRouteTracker() {
  const location = useLocation();

  useEffect(() => {
    const url = getUmamiUrl();

    // GỬI PAGEVIEW (KHÔNG PHẢI EVENT)
    window.umami?.track((props: Record<string, any>) => ({
      ...props,
      url,
    }));
  }, [location.key]);

  return null;
}
