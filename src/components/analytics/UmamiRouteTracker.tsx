import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function UmamiRouteTracker() {
  const location = useLocation();

  useEffect(() => {
    const url = `${location.pathname}${location.search}`;

    // Umami: track pageview route cho HashRouter
    window.umami?.track(url);
  }, [location.pathname, location.search]);

  return null;
}
